export const CONSONANT = [
  'p',
  'b',
  't',
  'd',
  'dj',
  'k',
  'g',
  'f',
  'm',
  'n',
  'r',
  's',
  'sh',
  'j',
  'h',
  'l',
  'w',
  'y',
  'z',
]
export const VOWEL = ['a', 'e', 'i', 'o', 'u']
export const END = ['r', 'j', 'l', 's'] // no ending in m/n/h because used for accusative

const OR_NOTHING = ''
const GROUPS = [
  [VOWEL, CONSONANT, VOWEL],
  [VOWEL, [...VOWEL, OR_NOTHING], [...END, OR_NOTHING]],
  [CONSONANT, VOWEL, [...END, OR_NOTHING]],
  [CONSONANT, VOWEL, CONSONANT, VOWEL],
  [CONSONANT, VOWEL, VOWEL],
]

export function generate() {
  const seen: { [key: string]: boolean } = { '': true }
  const syllables: string[] = []
  const lsyllables: string[] = []

  GROUPS.forEach(g => {
    const [a, b, c, d] = g
    a.forEach(la => {
      b.forEach(lb => {
        if (lb === la) {
          return
        }
        c.forEach(lc => {
          if (lc === lb) {
            return
          }
          if (d) {
            d.forEach(ld => {
              if (ld === lc) {
                return
              }
              const syllable = [la, lb, lc, ld]
                .filter(x => x !== OR_NOTHING)
                .join('')
              if (!seen[syllable]) {
                seen[syllable] = true
                lsyllables.push(syllable)
              }
            })
          } else {
            const syllable = [la, lb, lc].filter(x => x !== OR_NOTHING).join('')
            if (!seen[syllable]) {
              seen[syllable] = true
              syllables.push(syllable)
            }
          }
        })
      })
    })
  })
  return { syllables, lsyllables }
}
