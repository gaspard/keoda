import * as columnify from 'columnify'

interface Example {
  phrase: (Word | Example)[]
  meaning: string
}

interface DescriptionFunction {
  (): string
}

interface Examples {
  [key: string]: Example
}

interface FullWord {
  name: string
  adj: string
  adv: string
  noun: string
  conj: string
  tens: string
  derived: Word[]
  pronoun: string
  person: string
  desc: DescriptionFunction
  preposition: string
  lang: string
  position: string
  prefix: string
  suffix: string
  verb: string
}

interface WordByName {
  [key: string]: Word
}

type WordDefinition = Partial<FullWord>

interface Word extends WordDefinition {
  name: string
}

export const words: WordByName = {}

function show(w: Word): () => string {
  return function() {
    return w.name
  }
}
export function word(name: string, definition: WordDefinition): Word {
  const word: Word = { name, ...definition }
  words[name] = word
  word.toString = show(word)
  return word
}

export function example(phrase: (Word | Example)[], meaning: string): Example {
  return { phrase, meaning }
}

export function see(example: Example | Word) {
  // noop
}

function showExamples(examples: Examples): void {
  console.log(
    Object.keys(examples)
      .map(k => `[${k}] ${stringifyExample(examples[k])}`)
      .join('\n')
  )
}

function isWord(elem: Example | Word): elem is Word {
  return !(elem as any).phrase
}

function stringifyExample(example: Example): string {
  return example.phrase
    .map(w => (isWord(w) ? w.name : stringifyExample(w)))
    .join(' ')
}

export function baseDefinition(wo: Word) {
  const defkey = Object.keys(wo).filter(
    k => k !== 'desc' && k !== 'name' && k !== 'toString'
  )[0] as keyof FullWord
  return wo[defkey]
}

export function printWords() {
  let derived = 0
  const data = Object.keys(words)
    .filter(key => !words[key].person)
    .sort()
    .map((key, idx) => {
      const wo = words[key]
      if (wo.derived) {
        derived += 1
      }
      const description = wo.desc ? wo.desc().slice(0, 50) : undefined
      return { name: wo.name, definition: baseDefinition(wo) }
    })
  const count = Object.keys(data).length
  data.map(d => `${d.name}\t${d.definition}`).forEach(d => console.log(d))
  //console.log(columnify(data))
  console.log('[COUNT]', count)
  console.log('[ROOTS]', count - derived)
  console.log('[DERIV]', derived)
}
