// Had to get these ones out of helpers to avoid compilation
// issues...

import { CASES } from './cases'
import {
  ENDS_VOWEL,
  EntriesByType,
  Entry,
  EntryDefinition,
  LAST_VOWEL,
  MainKeys,
  MAIN_KEYS,
  isNativeKey,
  STARTS_VOWEL,
} from './types'

export const entries: EntriesByType = {
  word: {},
  card: {},
  phrase: {},
  alt: {},
}

const PREFIX_JOIN = 'h'
const SUFFIX_JOIN = 'l'

// 'join' value is dictated by first for prefix (left most) and last for suffix (right most)
export function joinMorphemes(
  prevName: string,
  nextName: string,
  join: string | undefined,
  type: 'prefix' | 'suffix'
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
    fix =
      join !== undefined ? join : type === 'prefix' ? PREFIX_JOIN : SUFFIX_JOIN
  } else if (!pvowel && !nvowel) {
    // two cononants
    fix = join !== undefined ? join : last[1]
  }
  return prevName + fix + nextName.replace('*', last[1])
}

// When 'next' forces class, this is set (such as with accusative)
// When 'prev' forces class, this changes (such as with possessivity)
// Else, keep previous class.
export function getCla(
  prev: EntryDefinition,
  next: EntryDefinition,
  // Finding the class of the final word
  fromPrefix = true
) {
  const forced = next.force || prev.force
  if (forced) {
    return forced
  }
  const { cla } = prev
  if (fromPrefix) {
    return cla!
  } else if (cla === 'noun') {
    return 'adj'
  } else if (cla === 'verb') {
    return 'adv'
  } else {
    return cla!
  }
}

export function getGlo(
  prev: EntryDefinition,
  next: EntryDefinition,
  fromPrefix = false
): string {
  let glo = prev.glo || prev[prev.cla!]!
  if (next.force) {
    // rewrite previous glo
    const parts = glo.split('.')
    let g = prev[next.force]
    if (g) {
      parts.pop()
      if (next.force === 'verb') {
        g = g.replace(/^to /, '')
      }
      parts.push('**' + g + '**')
      glo = parts.join('')
    }
  }

  if (fromPrefix && glo.includes('INF')) {
    // Special case. Have not found an elegant way to solve this...
    return glo + '.**' + next.verb! + '**'
  } else if (!next.forcedGlo) {
    // Try to follow class
    const cla = getCla(prev, next, fromPrefix)
    const nglo = next[cla]
    if (nglo) {
      if (cla === 'verb') {
        return glo + '.**' + nglo.replace(/^to /, '') + '**'
      } else if (cla === 'noun') {
        return glo + '.**' + nglo + '**'
      } else {
        // modifier
        return glo + '.*' + nglo + '*'
      }
    }
  }
  const nglo = next.glo || next[next.cla!]!
  return glo + (nglo === '' ? '' : '.') + nglo
}

function setDefaults(name: string, def: EntryDefinition) {
  const ndef = { ...def }
  ndef.forcedGlo = !!def.glo
  if (def.glo !== undefined && def.cla !== undefined) {
    return ndef
  }
  const key = MAIN_KEYS.find(k => def[k])
  if (!key) {
    throw new Error(
      `Invalid entry '${name}': ${JSON.stringify(def)} (none of the main keys).`
    )
  }
  if (def.glo === undefined) {
    const stars = key === 'adj' || key === 'adv' ? '*' : '**'
    ndef.glo = stars + def[key!] + stars
  }
  if (def.cla === undefined) {
    ndef.cla = key
  }
  return ndef
}

function makeSuffix(
  prevEntry: Entry,
  suf: string,
  // Once CASES are moved to 'suffix', we can change this to next.definition
  next: {
    glo?: string
    join?: string
    force?: MainKeys
    debug?: boolean
  },
  // Once CASES are moved to 'suffix', we can change this to EntryDefinition
  orig?: Entry
) {
  const [, eid] = prevEntry.id.split('-')
  const id = `${eid}${suf}`
  const alt = entries.alt[id]
  if (alt) {
    return alt
  } else {
    const prev = prevEntry.definition
    const r = LAST_VOWEL.exec(prevEntry.name)
    if (!r) {
      throw new Error(
        `Invalid word ${prevEntry.name} (no vowel): ${JSON.stringify({
          suf,
          next,
        })}).`
      )
    }

    return entry(
      'alt',
      joinMorphemes(prevEntry.name, suf, next.join, 'suffix'),
      {
        glo: getGlo(prev, next),
        cla: getCla(prev, next),
        alt: prev.alt || (() => prevEntry),
        orig: orig ? () => orig : undefined,
        prev: () => prevEntry,
      }
    )
  }
}

const CASEKEYS = Object.keys(CASES)

export const suffixAccessor = {
  get(obj: Entry, key: string) {
    if (isNativeKey(key)) {
      return (obj as any)[key]
    }
    const id = `word-${key}`
    if (CASEKEYS.includes(key)) {
      return makeSuffix(obj, key, (CASES as any)[key])
    } else if (entries.word[id]) {
      const s = entries.word[id]
      return makeSuffix(obj, s.name, s.definition, s)
    } else {
      throw new Error(
        `Invalid suffix: '${key}' (variable name does not match id).\n\n  id: "${key}" // <-- add this in definition\n\n`
      )
    }
  },
}

export function entry(
  type: Entry['type'],
  name: string,
  definition: EntryDefinition
): Entry {
  const id = `${type}-${definition.id || name}`
  const e = entries[type][id]
  if (e) {
    return e
  }
  if (type === 'alt' && !definition.orig) {
    definition.orig = definition.alt
  }
  const obj: Partial<Entry> = {
    id,
    name,
    type,
    definition: type === 'word' ? setDefaults(name, definition) : definition,
    toString() {
      return `[${name}](${id})`
    },
  }
  const entry = new Proxy<Entry>(obj as Entry, suffixAccessor)
  entries[type][id] = entry
  return entry
}

// Warning with suffix name must match variable used to create element due to how Proxy
// works. In fact 'id' must equal 'word-[var name]' if entry name needs to be different.
export function suffix(name: string, definition: EntryDefinition): Entry {
  const def = Object.assign({}, definition)
  const firstKey = Object.keys(def).find(k =>
    MAIN_KEYS.includes(k as MainKeys)
  ) as MainKeys
  if (!def.suff) {
    def.suff = def[firstKey]
  }
  return entry('word', name, def)
}
