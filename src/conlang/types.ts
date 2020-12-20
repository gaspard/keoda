export interface Example {
  phrase: (Entry | Example)[]
  meaning: string
}

// ============================================ Word

export interface EntryInfo {
  // https://www.eva.mpg.de/lingua/resources/glossing-rules.php
  glo: string
  noun: string
  verb: string
  adj: string
  det: string
  conj: string
  prefix: string
  suffix: string
  prep: string
  pron: string
  tens: string
  lang: string
  posit: string
  adv: string
  // phrases only
  phrase: string
  // ???
  person: string
}

export interface FullEntry extends EntryInfo {
  name: string
  desc: () => string
  etym: () => Entry[]
  see: () => Entry[]
  alt: () => Entry
}

export const FULLTEXT_KEYS: (keyof EntryInfo)[] = [
  'conj',
  'noun',
  'verb',
  'adj',
  'det',
  'prefix',
  'suffix',
  'prep',
  'pron',
  'tens',
  'lang',
  'posit',
  'adv',
  'person',
]

export const DEF_KEYS: (keyof CompiledEntry)[] = [
  'etym',
  ...FULLTEXT_KEYS,
  'deriv',
  'see',
]

export interface EntryByName {
  [key: string]: Entry
}

export const TYPES: (keyof EntriesByType)[] = ['word', 'card', 'phrase', 'alt']

export interface EntriesByType {
  word: EntryByName
  card: EntryByName
  phrase: EntryByName
  alt: EntryByName
}

export interface CompiledEntryByName {
  [key: string]: CompiledEntry
}

export interface CompiledEntriesByType {
  word: CompiledEntryByName
  card: CompiledEntryByName
  phrase: CompiledEntryByName
  alt: CompiledEntryByName
}

export type EntryDefinition = Partial<FullEntry>

export interface Entry extends EntryDefinition {
  name: string
  type: 'word' | 'card' | 'phrase' | 'alt'
  id: string // === `${type}-${name}
  toString: () => string
}

export interface CompiledEntry extends Partial<EntryInfo> {
  name: string
  type: 'word' | 'card'
  // concat of all text for search
  fulltext: string
  // alternative word to show def
  alt?: string
  etym?: string[]
  desc?: string
  deriv?: string[]
  see?: string[]
}
