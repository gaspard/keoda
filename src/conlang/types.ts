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
  writ: string
  phon: string
  phrases: string[]
  // for question cards
  img: string
  // phrases only
  trad: string
  phrase: string
  // ???
  person: string
  // phrase options
  open?: boolean
}

export interface FullEntry extends EntryInfo {
  name: string
  desc: () => string
  etym: () => Entry[]
  see: () => Entry[]
  // For phrases
  words: () => Entry[]
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
  ...FULLTEXT_KEYS,
  'etym',
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
  id: string
  name: string
  phon: string
  writ: string
  type: 'word' | 'card' | 'phrase' | 'alt'
  // concat of all text for search
  fulltext: string
  // alternative word to show def
  alt?: string
  etym?: string[]
  desc?: string
  deriv?: string[]
  see?: string[]
  // for phrases
  words?: string[]
}
