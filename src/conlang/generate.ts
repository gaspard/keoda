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
export const END = ['m', 'n', 'r', 'j', 'l', 's']

const OR_NOTHING = ''
const GROUPS = [
  [VOWEL],
  [VOWEL, CONSONANT, VOWEL],
  [VOWEL, [...VOWEL, OR_NOTHING], [...END, OR_NOTHING]],
  [CONSONANT, VOWEL, [...END, OR_NOTHING]],
  [CONSONANT, VOWEL, VOWEL],
]

export function generate() {
  const seen: { [key: string]: boolean } = { '': true }
  const syllables: string[] = []

  GROUPS.forEach(g => {
    const [a, b, c] = g
    a.forEach(la => {
      b.forEach(lb => {
        if (lb === la) {
          return
        }
        c.forEach(lc => {
          if (lc === lb) {
            return
          }
          const syllable = [la, lb, lc].filter(a => a !== OR_NOTHING).join('')
          if (!seen[syllable]) {
            seen[syllable] = true
            syllables.push(syllable)
          }
        })
      })
    })
  })
  syllables.sort()
  return syllables
}

function run() {
  const SYLLABLES = generate()
  console.log('COUNT: ', SYLLABLES.length)
  console.log(SYLLABLES.join('\n'))
}

// run()
