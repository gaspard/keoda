export interface Example {
  phrase: (Word | Example)[]
  meaning: string
}

export interface DescriptionFunction {
  (): string
}

export interface FullWord {
  name: string
  desc: DescriptionFunction
  etym: () => Word[]
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
  // ???
  person: string
}

export const FULLTEXT_KEYS: (keyof CompiledWord)[] = [
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

export const DEF_KEYS: (keyof CompiledWord)[] = [
  'etym',
  ...FULLTEXT_KEYS,
  'see',
]

export interface WordByName {
  [key: string]: Word
}

export interface CompiledWordByName {
  [key: string]: CompiledWord
}

export type WordDefinition = Partial<FullWord>

export interface Word extends WordDefinition {
  name: string
}

export interface CompiledWord extends Omit<Word, 'etym' | 'desc'> {
  // concat of all text for search
  fulltext: string
  etym?: string[]
  desc?: string
  see?: string[]
}
