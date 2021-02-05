import * as suffix from './suffix'
import { CASES } from './cases'

export const LAST_VOWEL = /([aoeiu])[^aoeiu]*$/
export const STARTS_VOWEL = /^[aoeiu]/
export const ENDS_VOWEL = /[aoeiu]$/

export function debug(l: any) {
  console.log(JSON.stringify(l, null, 2))
}

const NATIVE_KEYS: (string | number | symbol)[] = [
  '_comp',
  'toString',
  'toJSON',
  'id',
  'name',
  'type',
  'definition',
]

export function isNativeKey(key: string | number | symbol) {
  return NATIVE_KEYS.includes(key) || typeof key === 'symbol'
}

// FIXME: REMOVE
export interface Example {
  phrase: (Entry | Example)[]
  meaning: string
}

// ============================================ Word

export interface EntryInfo {
  // MAIN KEYS ==========
  noun: string
  // property modifier
  adj: string
  // as an action
  verb: string
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
  // forced glo
  glo: string
  // https://www.eva.mpg.de/lingua/resources/glossing-rules.php
  forcedGlo: boolean
  // For prefix/suffix
  join: string
  // Type of element. Changes classname of gloss in UI.
  cla: MainKeys
  // Suffix/case forcing class on previous elements
  force: MainKeys
  // If this is true, the element is considered too common and should not
  // register phrases created with it (such as ACC markers, conjugation, etc).
  // set to false to ignore phrases.
  maxPhrases: number
  // Setting this to true log all glossing and agglutinations that imply the word
  debug?: boolean
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
  // top-most original word (points to real word)
  alt: () => Entry
  // for multi-level word composition (points to real word)
  orig: () => Entry
  // for multi-level word composition (can point to alt or word)
  prev: () => Entry
}

export const FULLTEXT_KEYS: (keyof EntryInfo)[] = [
  'noun',
  'verb',
  'adj',
  'adv',
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
  prev?: string
  orig?: string
  etym?: string[]
  desc?: string
  deriv?: string[]
  see?: string[]
  // for phrases
  words?: string[]
  nsfw?: boolean
}
