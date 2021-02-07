import { makeEntry } from './entry'
import { makePrefix } from './prefix'
import {
  Base,
  BaseEntry,
  EntriesByType,
  EntryDefinition,
  resolve,
} from './types'

export function makeLang<T extends Object>() {
  const entries: EntriesByType = {
    word: {},
    alt: {},
    card: {},
    phrase: {},
    // word and alt, indexed by id, not type-id.
    wordAndAlt: {},
  }
  const entry = makeEntry<T>(entries)
  const prefix = makePrefix<T>(entries.wordAndAlt, entry)
  let phraseIdx = 0
  function makeId() {
    return `${++phraseIdx}`
  }
  function makePhrase(definition: EntryDefinition) {
    const p = entry(makeId(), definition, 'phrase')
    const e = entries.phraseOrig
    if (e) {
      p.definition.see = () => [e]
    }
    return p
  }

  function alt(
    name: string,
    definition: EntryDefinition & { alt: () => Base }
  ) {
    return entry(name, definition, 'alt')
  }

  function phrase(trad: string, ...args: Base[]) {
    return makePhrase({ trad, words: () => args })
  }

  function card(name: string, definition: EntryDefinition): BaseEntry {
    return entry(
      name,
      Object.assign({ writ: name, phon: '' }, definition),
      'card'
    )
  }

  function word(name: string, definition: EntryDefinition) {
    return entry(name, definition, 'word')
  }

  return {
    entries,
    prefix,
    phrase,
    card,
    word,
    alt,
    entry,
    resolve,
    makePhrase,
  }
}
