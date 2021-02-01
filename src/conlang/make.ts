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

export function getGlo(
  prev: EntryDefinition,
  next: EntryDefinition,
  followPrefix = false
): string {
  let glo = prev.glo!
  if (next.force) {
    let g = prev[next.force]
    if (g) {
      if (next.force === 'verb') {
        g = g.replace(/^to /, '')
      }
      const stars = next.force === 'mod' ? '*' : '**'
      glo = stars + g + stars
    }
  } else if (followPrefix && prev.cla) {
    const classGlo = next[prev.cla]
    if (classGlo) {
      if (prev.cla === 'verb') {
        return glo + '.**' + classGlo.replace(/^to /, '') + '**'
      } else {
        return glo + '.**' + classGlo + '**'
      }
    }
  }
  return glo + (next.glo === '' ? '' : '.') + next.glo
}

function setDefaults(def: EntryDefinition) {
  if (def.glo !== undefined && def.cla !== undefined) {
    return def
  }
  const ndef = { ...def }
  const key = MAIN_KEYS.find(k => def[k])
  if (!key) {
    throw new Error(
      `Invalid definition ${JSON.stringify(def)} (none of the main keys).`
    )
  }
  const stars = key === 'mod' ? '*' : '**'
  if (def.glo === undefined) {
    ndef.glo = stars + def[key!] + stars
  }
  if (def.cla === undefined) {
    ndef.cla = key
  }
  return ndef
}

function makeSuffix(
  prev: Entry,
  suf: string,
  // Once CASES are moved to 'suffix', we can change this to next.definition
  def: {
    glo?: string
    join?: string
    force?: MainKeys
    debug?: boolean
  },
  // Once CASES are moved to 'suffix', we can change this to EntryDefinition
  orig?: Entry
) {
  const [, eid] = prev.id.split('-')
  const id = `${eid}${suf}`
  const alt = entries.alt[id]
  if (alt) {
    return alt
  } else {
    const r = LAST_VOWEL.exec(prev.name)
    if (!r) {
      throw new Error(
        `Invalid word ${prev.name} (no vowel): ${JSON.stringify({
          suf,
          def,
        })}).`
      )
    }

    const pdef = prev.definition

    return entry('alt', joinMorphemes(prev.name, suf, def.join, 'suffix'), {
      glo: getGlo(pdef, def),
      cla: def.force || pdef.cla,
      alt: pdef.alt || (() => prev),
      orig: orig ? () => orig : undefined,
      prev: () => prev,
    })
  }
}

const CASEKEYS = Object.keys(CASES)

export const suffixAccessor = {
  get(obj: Entry, key: string) {
    if (
      key === '_comp' ||
      key === 'id' ||
      key === 'name' ||
      key === 'type' ||
      key === 'definition' ||
      key === 'toString' ||
      typeof key === 'symbol'
    ) {
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
    definition: type === 'word' ? setDefaults(definition) : definition,
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
  if (def.glo === undefined) {
    def.glo = '*' + def[firstKey] + '*'
  }
  if (!def.suff) {
    def.suff = def[firstKey]
  }
  return entry('word', name, def)
}
