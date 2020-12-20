import {
  EntriesByType,
  Entry,
  EntryByName,
  EntryDefinition,
  Example,
} from '../types'

export const entries: EntriesByType = {
  word: {},
  card: {},
  phrase: {},
  alt: {},
}

export function entry(
  type: Entry['type'],
  name: string,
  definition: EntryDefinition
): Entry {
  const id = `${type}-${name}`
  const entry: Entry = {
    name,
    id,
    type,
    ...definition,
    toString: () => `[${name}](${id})`,
  }
  entries[type][id] = entry
  return entry
}

let phraseIdx = 0
function makeId() {
  return `${++phraseIdx}`
}

export function phrase(trad: string, ...args: Entry[]) {
  return entry('phrase', makeId(), { phrase: trad, see: () => args })
}

export function word(name: string, definition: EntryDefinition): Entry {
  return entry('word', name, definition)
}

export function alt(name: string, definition: EntryDefinition): Entry {
  return entry('alt', name, definition)
}

export function card(name: string, definition: EntryDefinition): Entry {
  return entry('card', name, definition)
}

// FIXME: REMOVE
export function example(phrase: (Entry | Example)[], meaning: string): Example {
  return { phrase, meaning }
}

// FIXME: REMOVE
export function see(example: Example | Entry) {
  // noop
}
