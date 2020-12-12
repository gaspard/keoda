export interface Example {
  phrase: (Word | Example)[]
  meaning: string
}

export interface DescriptionFunction {
  (): string
}

export interface FullWord {
  name: string
  adj: string
  adv: string
  noun: string
  conj: string
  tens: string
  etym: () => Word[]
  pron: string
  person: string
  desc: DescriptionFunction
  prep: string
  lang: string
  posit: string
  prefix: string
  suffix: string
  verb: string
}

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
  etym?: string[]
  desc?: string
  see?: string[]
}
