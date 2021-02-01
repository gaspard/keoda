import * as suffix from './suffix'
import { CASES } from './cases'

export interface Example {
  phrase: (Entry | Example)[]
  meaning: string
}

// ============================================ Word

export interface EntryInfo {
  // MAIN KEYS ==========
  noun: string
  // as an action
  verb: string
  // as a property modifier
  adj: string
  // as an action modifier
  adv: string
  // generic
  def: string
  // MAIN KEYS ==========
  pos: string
  pref: string
  suff: string
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
  // phrase options
  open?: boolean
  // alt ====
  // https://www.eva.mpg.de/lingua/resources/glossing-rules.php
  glo: string
  // For prefix/suffix
  join: string
  // Type of element. Changes classname of gloss in UI.
  cla: MainKeys
  // Suffix/case forcing class on previous elements
  force: MainKeys
}

export interface FullEntry extends EntryInfo {
  id: string
  name: string
  nsfw: boolean
  desc: () => string
  exam: () => Entry[]
  etym: () => { id: string }[]
  see: () => { id: string }[]
  // For phrases
  words: () => { id: string; name: string }[]
  alt: () => Entry
}

export const FULLTEXT_KEYS: (keyof EntryInfo)[] = [
  'noun', // noun
  'verb',
  'adj', // property concept modifier
  'adv', // action concept modifier
  'def',
  'pos',
]

export type MainKeys = 'noun' | 'verb' | 'adj' | 'adv' | 'def'

export const MAIN_KEYS: MainKeys[] = ['noun', 'verb', 'adj', 'adv', 'def']

export const DEF_KEYS: (keyof CompiledEntry)[] = [
  ...FULLTEXT_KEYS.filter(k => !MAIN_KEYS.includes(k as any)),
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

export const LAST_VOWEL = /([aoeiu])[^aoeiu]*$/
export const STARTS_VOWEL = /^[aoeiu]/
export const ENDS_VOWEL = /[aoeiu]$/

export type Suffix = typeof suffix
// FIXME: Remove Cases once 'cases' is empty and we only have suffix.
export type Cases = AsEntry<keyof typeof CASES>
export type AsEntry<K extends string> = { [key in K]: Entry }

export interface Entry extends Cases, Suffix {
  name: string
  type: 'word' | 'card' | 'phrase' | 'alt'
  id: string // === `${type}-${name}
  definition: EntryDefinition
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
