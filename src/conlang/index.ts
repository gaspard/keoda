import { CompiledWord, CompiledWordByName, Word } from './types'
import './words'
import { words } from './words/_helpers'

export { CompiledWord, CompiledWordByName }

const wordList = Object.keys(words).map(key => words[key])

function compile(name: string): CompiledWord {
  const word = words[name]
  const compiled = Object.assign({}, word) as CompiledWord
  if (word.etym) {
    compiled.etym = word.etym().map(w => w.name)
  }
  if (word.desc) {
    compiled.desc = word.desc()
  }
  const see = wordList
    .filter(w => w.etym && w.etym().find(w => w.name === name))
    .map(w => w.name)
  if (see.length) {
    compiled.see = see
  }
  return compiled
}

export function exportJSON() {
  const compiled: { [key: string]: CompiledWord } = {}
  Object.keys(words).forEach(key => {
    compiled[key] = compile(key)
  })
  return JSON.stringify(compiled, null, 2)
}

console.log(exportJSON())
