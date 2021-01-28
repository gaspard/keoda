import { EntriesByType, Entry, EntryDefinition, Example } from '../types'

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
  const id = `${type}-${definition.id || name}`
  const entry: Entry = {
    ...definition,
    name,
    id,
    type,
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
  return makePhrase({ trad, words: () => args })
}

export function block(...phrases: { t: string; p: Entry[] }[]) {
  return `###### block\n* ${phrases.map(p => phrase(p.t, ...p.p)).join('\n* ')}`
}

export function phraseX(trad: string, ...args: Entry[]) {
  return makePhrase({ trad, nsfw: true, words: () => args })
}

export function ophrase(trad: string, ...args: Entry[]) {
  return makePhrase({ trad, words: () => args, open: true })
}

function makePhrase(definition: EntryDefinition) {
  const p = entry('phrase', makeId(), definition)
  const e = PHRASE_ORIG.entry
  if (e) {
    p.see = () => [e]
  }
  return p
}

export function md(strs: TemplateStringsArray, ...keys: any[]): () => string {
  const lastIndex = strs.length - 1
  return function () {
    return (
      strs.slice(0, lastIndex).reduce((p, s, i) => p + s + keys[i], '') +
      strs[lastIndex]
    )
  }
}

export function word(name: string, definition: EntryDefinition): Entry {
  return entry('word', name, definition)
}

export function alt(
  name: string,
  definition: EntryDefinition & { alt: () => Entry }
): Entry {
  return entry('alt', name, definition)
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
