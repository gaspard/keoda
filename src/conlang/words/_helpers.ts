import { WordByName, Word, WordDefinition, Example } from '../types'
export const words: WordByName = {}

function show(w: Word): () => string {
  return function() {
    return `{${w.name}}`
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
