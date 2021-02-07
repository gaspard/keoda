// Had to get these ones out of helpers to avoid compilation
// issues...

import { debug } from './debug'
import { getCla } from './getCla'
import { getGlo } from './getGlo'
import { joinMorphemes } from './joinMorphemes'
import {
  BaseEntry,
  EntriesByType,
  EntryFunc,
  isNativeKey,
  LAST_VOWEL,
  MainKeys,
  SuffixAccessor,
  SuffixCases,
} from './types'

function appendEntry(
  entries: EntriesByType,
  entry: EntryFunc,
  prevEntry: BaseEntry,
  suf: string,
  // Once CASES are moved to 'suffix', we can change this to next.definition
  next: {
    id?: string
    glo?: string
    join?: string
    force?: MainKeys
    debug?: boolean
  },
  // Once CASES are moved to 'suffix', we can change this to EntryDefinition
  orig?: BaseEntry
) {
  const id = `${prevEntry.id}${suf}`
  const alt = entries.wordAndAlt[id]
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
      joinMorphemes(prevEntry.name, suf, next.join, 'suffix'),
      {
        id: `${prevEntry.id}${next.id}`,
        glo: getGlo(prev, next, false),
        cla: getCla(prev, next, false),
        alt: prev.alt || (() => prevEntry),
        orig: orig ? () => orig : undefined,
        prev: () => prevEntry,
      },
      'alt'
    )
  }
}

export function makeSuffixAccessor(
  entries: EntriesByType,
  cases: SuffixCases,
  entry: EntryFunc
): SuffixAccessor {
  return {
    get(obj: BaseEntry, key: string) {
      if (isNativeKey(key)) {
        return (obj as any)[key]
      } else if (key === '$') {
        return obj
      }
      if (cases[key]) {
        return appendEntry(entries, entry, obj, key, cases[key])
      } else if (entries.wordAndAlt[key]) {
        const s = entries.wordAndAlt[key]
        return appendEntry(entries, entry, obj, s.name, s.definition, s)
      } else {
        throw new Error(
          `Invalid suffix: '${key}' (variable name does not match id).\n\n  id: "${key}" // <-- add this in definition\n\n`
        )
      }
    },
  }
}
