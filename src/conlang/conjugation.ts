import { VOWEL } from './generate'
import { entries } from './words'

const INFLECTIONS = [
  // 1sp   on                   o   -ma
  'o',
  // 2s   tu (impératif)            -ma
  '',
  // 2s   tu                    i   -ma
  'i',
  // 3s   iel                   a   -ma
  'a',
  // 1p   nous tous présents    sho -ma
  'sho',
  // 2p   vous                  shi -ma
  'shi',
  // 3p   iels                  sha -ma
  'sha',

  // ====== Et les conjugaisons plus rares
  // 2h   tu honorifique        kei -ma
  'kei',
  // 2x   tu dépravé.e          yi  -ma
  'yi',
  // 1s   je                    pi  -ma
  'pi',
  // 5p   nous deux             de  -ma
  'de',
  // 6p   quelques              pe  -ma
  'pe',
  // 7p   tout.e.s              ka  -ma
  'ka',
]

const EXCEPTIONS: string[] = ['pinu']

export function detectConjugationIssues() {
  const conjugations: { [key: string]: string } = {}
  const verbs = Object.keys(entries)
    .filter(key => entries[key].verb)
    .sort()

  verbs.forEach(verb => {
    let printed = false
    function printHeader() {
      if (printed) {
        return
      }
      console.log(`=========== ${verb} (${entries[verb].verb}) =========`)
      printed = true
    }
    INFLECTIONS.forEach(inf => {
      const conj =
        inf + (VOWEL.indexOf(verb[0]) >= 0 && inf !== '' ? 'h' : '') + verb
      if (entries[conj] && inf !== '' && !EXCEPTIONS.includes(conj)) {
        printHeader()
        console.log(conj)
        console.log(`verb: ${inf} - ${verb} conflicts with ${conj}`)
      } else if (conjugations[conj]) {
        printHeader()
        console.log(conj)
        console.log(
          `verb: ${inf} - ${verb} conflicts with ${conjugations[conj]}`
        )
      } else {
        conjugations[conj] = `${inf} - ${verb}`
      }
    })
  })
}

detectConjugationIssues()
