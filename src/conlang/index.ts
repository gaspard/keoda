import {
  CompiledWord,
  CompiledWordByName,
  DEF_KEYS,
  FULLTEXT_KEYS,
  Word,
} from './types'
import './words'
import { words } from './words/_helpers'

export { CompiledWord, CompiledWordByName }

const wordList = Object.keys(words).map(key => words[key])

function compile(name: string): CompiledWord {
  const word = words[name]
  const compiled = Object.assign({}, word) as CompiledWord
  const fulltext: string[] = [name]
  if (word.etym) {
    const etym = word.etym().map(w => w.name)
    compiled.etym = etym
    fulltext.push(...etym)
  }

  if (word.desc) {
    compiled.desc = word.desc()
    fulltext.push(compiled.desc)
  }

  const see = wordList
    .filter(w => w.etym && w.etym().find(w => w.name === name))
    .map(w => w.name)
  if (see.length) {
    compiled.see = see
    fulltext.push(...see)
  }

  compiled.fulltext = [
    ...fulltext,
    ...FULLTEXT_KEYS.map(k => compiled[k]).filter(x => x),
  ].join(' ')
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
