import { entry } from './make'
import { Entry, EntryDefinition, Example, MAIN_KEYS } from './types'

let phraseIdx = 0
function makeId() {
  return `${++phraseIdx}`
}

export const PHRASE_ORIG: { entry?: Entry } = {}

export function alt(
  name: string,
  definition: EntryDefinition & { alt: () => Entry }
): Entry {
  return entry('alt', name, definition)
}

export function phrase(trad: string, ...args: { id: string; name: string }[]) {
  return makePhrase({ trad, words: () => args })
}

export function block(...phrases: { t: string; p: Entry[] }[]) {
  return `###### block\n* ${phrases.map(p => phrase(p.t, ...p.p)).join('\n* ')}`
}

export function phraseX(trad: string, ...args: { id: string; name: string }[]) {
  return makePhrase({ trad, nsfw: true, words: () => args })
}

export function ophrase(trad: string, ...args: { id: string; name: string }[]) {
  return makePhrase({ trad, words: () => args, open: true })
}

function makePhrase(definition: EntryDefinition) {
  const p = entry('phrase', makeId(), definition)
  const e = PHRASE_ORIG.entry
  if (e) {
    p.definition.see = () => [e]
  }
  return p
}

export function word(name: string, definition: EntryDefinition): Entry {
  const main = MAIN_KEYS.find(k => definition[k]) || 'noun'
  if (!definition.cla) {
    definition.cla = main
  }
  if (!definition.glo) {
    definition.glo = '**' + definition[main] + '**'
  }
  return entry('word', name, definition)
}

export function card(name: string, definition: EntryDefinition): Entry {
  return entry(
    'card',
    name,
    Object.assign({ writ: name, phon: '' }, definition)
  )
}

// FIXME: REMOVE
export function example(phrase: (Entry | Example)[], meaning: string): Example {
  return { phrase, meaning }
}

// FIXME: REMOVE
export function see(example: Example | Entry) {
  // noop
}
