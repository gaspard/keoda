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

export function block(
  ...phrases: { t: string; p: { id: string; name: string }[] }[]
) {
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
  return entry('word', name, definition)
}

export function card(name: string, definition: EntryDefinition): Entry {
  return entry(
    'card',
    name,
    Object.assign({ writ: name, phon: '' }, definition)
  )
}

function getEntry(entry: Entry | { $: Entry }): Entry {
  const e = entry as { $: Entry }
  return e.$ || entry
}

export function nounRef(entry: Entry | { $: Entry }) {
  const ent = getEntry(entry)
  return `${ent} (${ent.definition.noun})`
}

export function adjRef(entry: Entry) {
  return `${entry} (${entry.definition.noun})`
}

export function gloRef(entry: Entry) {
  return `${entry} (${entry.definition.glo})`
}

// FIXME: REMOVE
export function example(phrase: (Entry | Example)[], meaning: string): Example {
  return { phrase, meaning }
}

// FIXME: REMOVE
export function see(example: Example | Entry) {
  // noop
}
