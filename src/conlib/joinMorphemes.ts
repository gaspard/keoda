import { ENDS_VOWEL, LAST_VOWEL, STARTS_VOWEL } from './types'

const PREFIX_JOIN = 'h'
const SUFFIX_JOIN = 'l'

// 'join' value is dictated by first for prefix (left most) and last for suffix (right most)
export function joinMorphemes(
  prevName: string,
  nextName: string,
  join: string | undefined,
  prefix: boolean
) {
  if (nextName === '') {
    // 'silent' elements like imperative
    return prevName
  }
  let fix = ''
  const last = LAST_VOWEL.exec(prevName)
  if (!last) {
    throw new Error(`Invalid word ${prevName} (no vowels)`)
  }
  const pvowel = ENDS_VOWEL.test(prevName)
  const nvowel = STARTS_VOWEL.test(nextName)
  if (pvowel && nvowel) {
    if (prevName.slice(0, 1) === nextName.slice(0, 1)) {
      prevName = prevName.slice(1)
    } else {
      // two vowels
      fix = join !== undefined ? join : prefix ? PREFIX_JOIN : SUFFIX_JOIN
    }
  } else if (!pvowel && !nvowel) {
    // two cononants
    fix = join !== undefined ? join : last[1]
  }
  return prevName + fix + nextName.replace('*', last[1])
}
