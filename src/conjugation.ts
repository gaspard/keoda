import { words, baseDefinition } from './words'
import { VOWEL } from './generate'

const INFLECTIONS = ['pi', '', 'a', 'ka', 'no', 'sha', 'o', 'de', 'pe', 'pa']

export function detectConjugationIssues() {
  const conjugations: { [key: string]: string } = {}
  const verbs = Object.keys(words)
    .filter(key => words[key].verb)
    .sort()

  verbs.forEach(verb => {
    console.log(`=========== ${verb} (${words[verb].verb}) =========`)
    INFLECTIONS.forEach(inf => {
      const conj =
        inf + (VOWEL.indexOf(verb[0]) >= 0 && inf !== '' ? 'h' : '') + verb
      if (words[conj] && inf !== '') {
        console.log(
          `verb: ${inf} - ${verb} conflicts with ${conj} (${baseDefinition(
            words[conj]
          )})`
        )
      } else if (conjugations[conj]) {
        console.log(
          `verb: ${inf} - ${verb} conflicts with ${conjugations[conj]}`
        )
      } else {
        conjugations[conj] = `${inf} - ${verb}`
      }
      console.log(`${conj}`)
    })
  })
}

detectConjugationIssues()
