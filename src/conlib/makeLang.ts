import { makeEntry } from './entry'
import { makePrefix } from './prefix'
import { EntriesByType, Entry, EntryDefinition, SuffixCases } from './types'

export function makeLang<T extends Object>(suffixCases: SuffixCases = {}) {
  const entries: EntriesByType = {
    word: {},
    alt: {},
    card: {},
    phrase: {},
    // word and alt, indexed by id, not type-id.
    wordAndAlt: {},
  }
  const entry = makeEntry<T>(entries, suffixCases)
  const prefix = makePrefix<T>(entries.wordAndAlt, entry)
  function word(name: string, definition: EntryDefinition) {
    return entry(name, definition, 'word')
  }
  function alt(
    name: string,
    definition: EntryDefinition & { alt: () => Entry<T> }
  ) {
    return entry(name, definition, 'alt')
  }
  return { prefix, word, alt, entry }
}
