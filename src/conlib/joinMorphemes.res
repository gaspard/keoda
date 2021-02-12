/*
Variables     getItem
Constructors  Node, EmptyQueue
Types         priority_queue
Signatures    PRIORITY_QUEUE
Structures    PriorityQueue
Functors      PriorityQueueFn (Fn completes the name)
*/

type word = {name: string, join: string}
type chain =
  | Prefix(word)
  | Word(word)

let joinMorphemes = (left, right) =>
  switch left {
  | Prefix(l) => l.name ++ l.join ++ right.name
  | Word(l) => l.name ++ right.join ++ right.name
  }

Js.log(joinMorphemes(Prefix({name: "o", join: "h"}), {name: "la", join: "l"}))

/*
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
    // two cononants
    fix = join !== undefined ? join : last[1]
  }
  return prevName + fix + nextName.replace('*', last[1])
}
*/
