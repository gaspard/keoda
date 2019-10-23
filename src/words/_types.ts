interface Example {
  phrase: Word[]
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
  noun: string
  desc: DescriptionFunction
  examples: Examples
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

export function example(phrase: Word[], meaning: string): Example {
  return { phrase, meaning }
}

export function see(example: Example | Word) {
  // noop
}

function showExamples(examples: Examples): void {
  console.log(
    Object.keys(examples)
      .map(k => `[${k}] ${examples[k].phrase.map(w => w.name).join(' ')}`)
      .join(', ')
  )
}

export function printWords() {
  Object.keys(words)
    .sort()
    .forEach(name => {
      const { desc, examples } = words[name]
      console.log(name) // , desc ? desc () : '' )
      if (examples) {
        showExamples(examples)
      }
    })
}
