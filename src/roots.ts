import { generate } from './conlang/generate'
import * as words from './conlang/words'

const existing = Object.keys(words)

function list(filter: string = '') {
  const { syllables, lsyllables } = generate()
  const possible = syllables.filter(k => !existing.includes(k))
  const lpossible = lsyllables.filter(k => !existing.includes(k))
  let list = [...possible, ...lpossible]
  if (filter) {
    const re = new RegExp('^' + filter + '$')
    console.log(re)
    list = list.filter(k => re.test(k))
  }
  console.log(list.join('\n'))
}

list(process.argv[2])
