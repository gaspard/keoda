import {
  BaseEntry,
  ENDS_knssh,
  ENDS_m,
  ENDS_ssh,
  ENDS_VOWEL,
  ENDS_y,
  LAST_VOWEL,
  STARTS_k,
  STARTS_no_join_m,
  STARTS_t,
  STARTS_VOWEL,
  STARTS_y,
} from './types'

const PREFIX_JOIN = 'h'
const SUFFIX_JOIN = 'l'

// 'join' value is dictated by first for prefix (left most) and last for suffix (right most)
export function joinMorphemes(
  prev: BaseEntry,
  next: BaseEntry,
  join: string | undefined,
  prefix: boolean
) {
  const prevName = prev.name
  const nextName = next.name
  if (prev.definition.op === 'capitalize') {
    return nextName.charAt(0).toLocaleUpperCase() + nextName.slice(1)
  }
  if (nextName === '') {
    // 'silent' elements like imperative
    return prevName
  }
  let fix = ''
  const last = LAST_VOWEL.exec(prevName)
  if (!last) {
    throw new Error(`Invalid word ${prevName} (no vowels)`)
  }
  const pvowel = ENDS_VOWEL.test(prevName) // includes 'y'
  const nvowel = STARTS_VOWEL.test(nextName) // does not include 'y'
  if (pvowel && nvowel) {
    // two vowels
    if (!prefix && nextName.length === 1 && nextName != 'e') {
      // moods: no fix
      fix = ''
    } else {
      fix = join !== undefined ? join : prefix ? PREFIX_JOIN : SUFFIX_JOIN
    }
  } else if (ENDS_y.test(prevName) && STARTS_y.test(nextName)) {
    fix = join !== undefined ? join : 'n'
  } else if (!pvowel && !nvowel) {
    // two consonants or two semivowels
    if (ENDS_m.test(prevName) && STARTS_no_join_m.test(nextName)) {
      // m. + not kmnt
      // no fix
    } else if (ENDS_knssh.test(prevName) && STARTS_t.test(nextName)) {
      // kt nt st sht
      // no fix
    } else if (ENDS_ssh.test(prevName) && STARTS_k.test(nextName)) {
      // sk shk
      // no fix
    } else {
      fix = join !== undefined ? join : last[1].toLowerCase()
    }
  }
  return prevName + fix + nextName.replace('*', last[1].toLowerCase())
}
