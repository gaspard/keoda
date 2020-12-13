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
}

export const FULLTEXT_KEYS: (keyof EntryInfo)[] = [
  'conj',
  'noun',
  'verb',
  'adj',
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

export interface CompiledEntryByName {
  [key: string]: CompiledEntry
}

export type EntryDefinition = Partial<FullEntry>

export interface Entry extends EntryDefinition {
  name: string
  type: 'word' | 'card' | 'phrase'
  id: string // === `${type}-${name}
  toString: () => string
}

export interface CompiledEntry extends Partial<EntryInfo> {
  name: string
  type: 'word' | 'card'
  // concat of all text for search
  fulltext: string
  etym?: string[]
  desc?: string
  deriv?: string[]
  see?: string[]
}
