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

export const PHRASE_ORIG: { entry?: Entry } = {}

export function phrase(trad: string, ...args: Entry[]) {
  const p = entry('phrase', makeId(), { trad, words: () => args })
  const e = PHRASE_ORIG.entry
  if (e) {
    p.see = () => [e]
  }
  args.forEach(w => {
    const orig = w.alt ? w.alt() : w
    let { phrases } = orig
    if (!phrases) {
      phrases = orig.phrases = []
    }
    phrases.push(p.id)
  })
  return p
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
