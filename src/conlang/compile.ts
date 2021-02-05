import { PHRASE_ORIG } from './helpers'
import { entries } from './make'
import {
  CompiledEntriesByType,
  CompiledEntry,
  EntriesByType,
  Entry,
  EntryByName,
  EntryDefinition,
  TYPES,
} from './types'
// Import all to force word creation
import './words'
import { phon, write } from './writing'

export { CompiledEntry, EntryByName }

const wordList = Object.values(entries.word)
const cache: { id: string; etym: string[] }[] = wordList
  .filter(w => w.definition.etym)
  .map(w => ({ id: w.id, etym: w.definition.etym!().map(w => w.id) }))

const GLO_REPLACE: { [key: string]: string } = {
  // to
  wex: '1SG.INDF',
  ourx: 'POSS.1SG.INDF',
  we9: '1PL',
  our9: 'POSS.1PL',
  // ti
  you1: '2SG',
  your1: 'POSS.2SG',
  you9: '2PL',
  your9: 'POSS.2PL',
  // ta
  they1: '3SG',
  their1: 'POSS.3SG',
  they9: '3PL',
  their9: 'POSS.3PL',
  // other
  somex: '3PL.INDF',
  // ['^!.']: '',
}

function fixGlo(glo: string): string {
  let w = glo
  for (const k in GLO_REPLACE) {
    w = w.replace(new RegExp(k, 'g'), GLO_REPLACE[k])
  }
  return w
}

function compileWord(entry: Entry): CompiledEntry {
  // So that phrases created during compilation register
  // their origin.
  PHRASE_ORIG.entry = entry
  const definition = entry.definition
  const compiled = Object.assign(
    {
      id: entry.id,
      name: entry.name,
      type: entry.type,
    },
    definition,
    {
      fulltext: '',
      writ: definition.writ === undefined ? write(entry.name) : definition.writ,
      phon: definition.phon === undefined ? phon(entry.name) : definition.phon,
    }
  ) as CompiledEntry
  const c = compiled as EntryDefinition
  delete c.exam
  delete c.debug
  if (definition.exam) {
    // This runs the phrase production
    definition.exam()
  }
  const fulltext: string[] = [entry.name]
  // if (compiled.glo === undefined) {
  //   // default value to show on gloss
  //   const key = MAIN_KEYS.find(k => definition[k])
  //   compiled.glo = '**' + definition[key!] + '**'
  // }
  if (compiled.glo) {
    compiled.glo = fixGlo(compiled.glo)
  }
  if (definition.alt) {
    compiled.alt = definition.alt().id
  }
  if (definition.orig) {
    compiled.orig = definition.orig().id
  }
  if (definition.prev) {
    compiled.prev = definition.prev().id
  }
  if (definition.etym) {
    const etym = definition.etym().map(w => w.id)
    compiled.etym = etym
    // fulltext.push(...etym)
  }

  if (definition.desc) {
    compiled.desc = definition.desc()
    // fulltext.push(compiled.desc)
  }

  const deriv = cache.filter(w => w.etym.find(id => id === entry.id))

  if (deriv.length) {
    compiled.deriv = deriv.map(w => w.id)
    // fulltext.push(...deriv.map(w => w.name))
  }

  if (definition.see) {
    const see = definition.see()
    compiled.see = see.map(w => w.id)
    // fulltext.push(...see.map(w => w.name))
  }

  if (definition.words) {
    const words = definition.words()
    compiled.words = words.map(w => w.id)
    // fulltext.push(...words.map(w => w.name))
    if (entry.type === 'phrase') {
      compiled.phrase = words
        .filter(w => w)
        .map(w => w.name)
        .join(' ')
    }
  }

  compiled.fulltext = [
    ...fulltext,
    // ...FULLTEXT_KEYS.map(k => compiled[k]).filter(x => x),
  ].join(' ')
  return compiled
}

function registerWord(phrase: CompiledEntry, word: CompiledEntry) {
  let { phrases } = word
  if (!phrases) {
    phrases = word.phrases = []
  }
  if (
    (word.maxPhrases === undefined || phrases.length < word.maxPhrases) &&
    !phrases.includes(phrase.id)
  ) {
    phrases.push(phrase.id)
  }
}

function registerInPhrase(
  compiled: CompiledEntriesByType,
  phrase: CompiledEntry,
  id: string
) {
  const [type] = id.split('-')
  const word = compiled[type as keyof typeof compiled][id]
  if (!word) {
    console.error(`Missing word '${id}', cannot register`)
    return
  }
  if (type === 'alt') {
    if (word.orig) {
      registerInPhrase(compiled, phrase, word.orig)
    }
    if (word.prev) {
      registerInPhrase(compiled, phrase, word.prev)
    }
  } else {
    registerWord(phrase, word)
  }
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
    phrase.words!.forEach(id => registerInPhrase(compiled, phrase, id))
  })

  return JSON.stringify(compiled, null, 2)
}
