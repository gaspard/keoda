export interface Example {
  phrase: (Entry | Example)[]
  meaning: string
}

// ============================================ Word

export interface EntryInfo {
  // https://www.eva.mpg.de/lingua/resources/glossing-rules.php
  glo: string
  // TRY TO USE KEYS REFLECTING FUNCTION (NOT FORM)
  noun: string
  // as a property modifier
  prop: string
  // as an action
  action: string
  // as an action modifier
  style: string
  pos: string
  // Ho to treat these two ?
  pref: string
  suff: string
  // TO BE REMOVED I THINK (we have cards for this)
  subj: string
  det: string
  prep: string
  pron: string
  tens: string
  lang: string
  // INTERNAL
  writ: string
  phon: string
  phrases: string[]
  // image
  img: string
  imgpos: string
  // phrases only
  trad: string
  phrase: string
  // ???
  person: string
  // phrase options
  open?: boolean
}

export type LazyString = string | (() => string)

export interface FullEntry extends EntryInfo {
  id: string
  name: string
  nsfw: boolean
  desc: LazyString
  exam: () => Entry[]
  etym: () => Entry[]
  see: () => Entry[]
  // For phrases
  words: () => Entry[]
  alt: () => Entry
}

export const FULLTEXT_KEYS: (keyof EntryInfo)[] = [
  'noun', // noun
  'action',
  'subj',
  'prop', // property concept modifier
  'style', // action concept modifier
  'det',
  'prep',
  'pron',
  'tens',
  'lang',
  'pos',
  'person',
]

export const DEF_KEYS: (keyof CompiledEntry)[] = [
  ...FULLTEXT_KEYS.filter(k => k !== 'noun'),
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
  nsfw?: boolean
}
