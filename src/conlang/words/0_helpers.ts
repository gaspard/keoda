import { Entry, EntryByName, EntryDefinition, Example } from '../types'
export const entries: EntryByName = {}
export const phrases: EntryByName = {}

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
  if (type === 'phrase') {
    // These are generated during compilation and we do not want them in lexicon.
    phrases[id] = entry
  } else {
    entries[id] = entry
  }
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
  // TODO: Make hidden / do not count
  return entry('word', name, definition)
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
