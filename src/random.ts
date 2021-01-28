import { generate } from './conlang/generate'
import * as words from './conlang/words'

const existing = Object.keys(words)

function shuffle(array: string[]) {
  const len = array.length
  for (let i = 0; i < len - 1; i++) {
    const t = i + Math.floor(Math.random() * (len - i))
    const a = array[i] // where to store randomized pick
    const b = array[t] // random pick un unshuffled area
    array[i] = b
    array[t] = a
  }
  return array
}

function random(count = 10) {
  const { syllables, lsyllables } = generate()
  const possible = shuffle(syllables.filter(k => !existing.includes(k)))
  const lpossible = shuffle(lsyllables.filter(k => !existing.includes(k)))
  console.log(possible.slice(0, count / 2).join('\n'))
  console.log(lpossible.slice(0, count / 2).join('\n'))
}

random(parseInt(process.argv[2] || '10'))
