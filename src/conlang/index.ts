import {
  CompiledEntriesByType,
  CompiledEntry,
  EntriesByType,
  Entry,
  EntryByName,
  FULLTEXT_KEYS,
  TYPES,
} from './types'
import './words'
import { entries, PHRASE_ORIG } from './words/0_helpers'
import { writeFileSync } from 'fs'
import { join } from 'path'
import { phon, write } from './writing'

export { CompiledEntry, EntryByName }

const wordList = Object.keys(entries.word).map(key => entries.word[key])

function compileWord(word: Entry): CompiledEntry {
  // So that phrases created during compilation register
  // their origin.
  PHRASE_ORIG.entry = word

  const compiled = Object.assign({}, word, {
    fulltext: '',
    writ: word.writ || write(word.name),
    phon: word.phon || phon(word.name),
  }) as CompiledEntry
  const fulltext: string[] = [word.name]
  if (!compiled.glo) {
    // default value to show on gloss
    const key = Object.keys(word).find(key =>
      FULLTEXT_KEYS.includes(key as any)
    )
    compiled.glo = word[key as 'glo']
  }
  if (word.alt) {
    compiled.alt = word.alt().id
  }
  if (word.etym) {
    const etym = word.etym().map(w => w.id)
    compiled.etym = etym
    fulltext.push(...etym)
  }

  if (word.desc) {
    compiled.desc = word.desc()
    fulltext.push(compiled.desc)
  }

  const deriv = wordList.filter(
    w => w.etym && w.etym().find(w => w.id === word.id)
  )
  if (deriv.length) {
    compiled.deriv = deriv.map(w => w.id)
    fulltext.push(...deriv.map(w => w.name))
  }

  if (word.see) {
    const see = word.see()
    compiled.see = see.map(w => w.id)
    fulltext.push(...see.map(w => w.name))
  }

  if (word.words) {
    const words = word.words()
    compiled.words = words.map(w => w.id)
    fulltext.push(...words.map(w => w.name))
    if (word.type === 'phrase') {
      compiled.phrase = words.map(w => w.name).join(' ')
    }
  }

  compiled.fulltext = [
    ...fulltext,
    ...FULLTEXT_KEYS.map(k => compiled[k]).filter(x => x),
  ].join(' ')
  return compiled
}

function registerPhrases() {
  Object.values(entries.phrase).forEach(p => {
    p.see!().forEach(w => {
      const orig = w.alt ? w.alt() : w
      let { phrases } = orig
      if (!phrases) {
        phrases = orig.phrases = []
      }
      phrases.push(p.id)
    })
  })
}

export function exportJSON(db: EntriesByType) {
  registerPhrases()
  const compiled: CompiledEntriesByType = {
    word: {},
    card: {},
    phrase: {},
    alt: {},
  }

  TYPES.forEach(type => {
    const result = compiled[type]
    const entries = db[type]
    Object.keys(entries).forEach(key => {
      result[key] = compileWord(entries[key])
    })
  })
  // Rerun words to include links to phrases
  compiled.word = {}
  const result = compiled.word
  const entries = db.word
  Object.keys(entries).forEach(key => {
    result[key] = compileWord(entries[key])
  })

  return JSON.stringify(compiled, null, 2)
}

writeFileSync(join(__dirname, '..', 'db.json'), exportJSON(entries), 'utf8')
console.log('Updated DB.')
