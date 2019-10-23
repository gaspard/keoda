const CONSONANT = [
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
]
const VOWEL = ['a', 'e', 'i', 'o', 'u']
const END = ['m', 'n', 'r', 'j', 'l']

const OR_NOTHING = ''
const GROUPS = [
  // [VOWEL, CONSONANT, VOWEL],
  // [VOWEL, [...VOWEL, OR_NOTHING], [...END, OR_NOTHING]],
  // [CONSONANT, VOWEL, [...END, OR_NOTHING]],
  [CONSONANT, VOWEL, VOWEL],
]

const SEEN: { [key: string]: boolean } = { '': true }
const SYLLABLES: string[] = [...VOWEL]

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
        if (!SEEN[syllable]) {
          SEEN[syllable] = true
          SYLLABLES.push(syllable)
        }
      })
    })
  })
})

console.log('COUNT: ', SYLLABLES.length)
console.log(SYLLABLES.join('\n'))
