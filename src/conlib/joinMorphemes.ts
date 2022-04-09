import {
  ENDS_knssh,
  ENDS_ssh,
  ENDS_VOWEL,
  LAST_VOWEL,
  STARTS_k,
  STARTS_t,
  STARTS_VOWEL,
} from './types'

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
    // two vowels
    fix = join !== undefined ? join : prefix ? PREFIX_JOIN : SUFFIX_JOIN
  } else if (!pvowel && !nvowel) {
    // two consonants
    if (ENDS_knssh.test(prevName) && STARTS_t.test(nextName)) {
      // kt nt st sht
      // no fix
    } else if (ENDS_ssh.test(prevName) && STARTS_k.test(nextName)) {
      // sk shk
      // no fix
    } else {
      fix = join !== undefined ? join : last[1]
    }
  }
  return prevName + fix + nextName.replace('*', last[1])
}
