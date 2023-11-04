import {
  BaseEntry,
  ENDS_k,
  ENDS_l,
  ENDS_m,
  ENDS_n,
  ENDS_r,
  ENDS_s,
  ENDS_sh,
  ENDS_t,
  ENDS_VOWEL,
  ENDS_y,
  LAST_VOWEL,
  STARTS_no_join_k,
  STARTS_no_join_l,
  STARTS_no_join_m,
  STARTS_no_join_n,
  STARTS_no_join_r,
  STARTS_no_join_s,
  STARTS_no_join_sh,
  STARTS_no_join_t,
  STARTS_VOWEL,
  STARTS_y,
} from './types'

const PREFIX_JOIN = 'x'
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
    } else if (prevName.toLowerCase() === 'u' && !nextName.startsWith('u')) {
      // infinitive : no fix
      fix = ''
    } else {
      fix = join !== undefined ? join : prefix ? PREFIX_JOIN : SUFFIX_JOIN
    }
  } else if (ENDS_y.test(prevName) && STARTS_y.test(nextName)) {
    fix = join !== undefined ? join : 'n'
  } else if (!pvowel && !nvowel) {
    // two consonants or two semivowels
    if (ENDS_k.test(prevName) && STARTS_no_join_k.test(nextName)) {
    } else if (ENDS_l.test(prevName) && STARTS_no_join_l.test(nextName)) {
    } else if (ENDS_m.test(prevName) && STARTS_no_join_m.test(nextName)) {
    } else if (ENDS_n.test(prevName) && STARTS_no_join_n.test(nextName)) {
    } else if (ENDS_r.test(prevName) && STARTS_no_join_r.test(nextName)) {
    } else if (ENDS_s.test(prevName) && STARTS_no_join_s.test(nextName)) {
    } else if (ENDS_sh.test(prevName) && STARTS_no_join_sh.test(nextName)) {
    } else if (ENDS_t.test(prevName) && STARTS_no_join_t.test(nextName)) {
    } else {
      fix = join !== undefined ? join : last[1].toLowerCase()
    }
  }
  return prevName + fix + nextName.replace('*', last[1].toLowerCase())
}
