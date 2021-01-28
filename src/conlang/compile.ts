import {
  CompiledEntriesByType,
  CompiledEntry,
  EntriesByType,
  Entry,
  EntryByName,
  FULLTEXT_KEYS,
  LazyString,
  TYPES,
} from './types'
import './words'
import { entries, PHRASE_ORIG } from './words/0_helpers'
import { phon, write } from './writing'

export { CompiledEntry, EntryByName }

const wordList = Object.keys(entries.word).map(key => entries.word[key])

function unlazy(s: LazyString): string {
  return typeof s === 'string' ? s : s()
}

const GLO_REPLACE: { [key: string]: string } = {
  // to
  wex: 'weˣ',
  we9: 'we\\*',
  // ti
  you1: 'you¹',
  you9: 'you\\*',
  // ta
  they1: 'they¹',
  they9: 'they\\*',
  // other
  somex: 'someˣ',
}

function gloReplace(glo: string): string {
  let w = glo
  for (const k in GLO_REPLACE) {
    w = w.replace(new RegExp(k, 'g'), GLO_REPLACE[k])
  }
  return w
}

function compileWord(word: Entry): CompiledEntry {
  // So that phrases created during compilation register
  // their origin.
  PHRASE_ORIG.entry = word
  const compiled = Object.assign({}, word, {
    fulltext: '',
    writ: word.writ === undefined ? write(word.name) : word.writ,
    phon: word.phon === undefined ? phon(word.name) : word.phon,
  }) as CompiledEntry
  delete (compiled as Entry).exam
  if (word.exam) {
    // This runs the phrase production
    word.exam()
  }
  const fulltext: string[] = [word.name]
  if (word.glo) {
    compiled.glo = gloReplace(word.glo)
  } else if (!compiled.glo) {
    // default value to show on gloss
    if (word.noun) {
      compiled.glo = word.noun
    } else {
      const key = Object.keys(word).find(key =>
        FULLTEXT_KEYS.includes(key as any)
      )
      compiled.glo = '**' + word[key as 'glo'] + '**'
    }
  }
  if (word.alt) {
    compiled.alt = word.alt().id
  }
  if (word.etym) {
    const etym = word.etym().map(w => w.id)
    compiled.etym = etym
    // fulltext.push(...etym)
  }

  if (word.desc) {
    compiled.desc = unlazy(word.desc)
    // fulltext.push(compiled.desc)
  }

  const deriv = wordList.filter(
    w => w.etym && w.etym().find(w => w.id === word.id)
  )
  if (deriv.length) {
    compiled.deriv = deriv.map(w => w.id)
    // fulltext.push(...deriv.map(w => w.name))
  }

  if (word.see) {
    const see = word.see()
    compiled.see = see.map(w => w.id)
    // fulltext.push(...see.map(w => w.name))
  }

  if (word.words) {
    const words = word.words()
    compiled.words = words.map(w => w.id)
    // fulltext.push(...words.map(w => w.name))
    if (word.type === 'phrase') {
      compiled.phrase = words.map(w => w.name).join(' ')
    }
  }

  compiled.fulltext = [
    ...fulltext,
    // ...FULLTEXT_KEYS.map(k => compiled[k]).filter(x => x),
  ].join(' ')
  return compiled
}

export function exportJSON(db: EntriesByType) {
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

  // Register phrases in words
  const { alt, phrase } = compiled
  Object.values(phrase).forEach(phrase => {
    phrase.words!.forEach(id => {
      let [type] = id.split('-')
      let word = compiled[type as keyof typeof compiled][id]
      if (type === 'alt') {
        const a = alt[id]
        id = a.alt!
        type = id.split('-')[0]
        word = compiled[type as keyof typeof compiled][id]
      }
      let { phrases } = word
      if (!phrases) {
        phrases = word.phrases = []
      }
      if (!phrases.includes(phrase.id)) {
        phrases.push(phrase.id)
      }
    })
  })

  return JSON.stringify(compiled, null, 2)
}
