// Had to get these ones out of helpers to avoid compilation
// issues...

import { CASES } from './cases'
import {
  ENDS_VOWEL,
  EntriesByType,
  Entry,
  EntryDefinition,
  LAST_VOWEL,
  STARTS_VOWEL,
} from './types'

export const entries: EntriesByType = {
  word: {},
  card: {},
  phrase: {},
  alt: {},
}

function makeSuffix(
  e: Entry,
  suf: string,
  glo: { glo?: string; join?: string }
) {
  const [, eid] = e.id.split('-')
  const id = `${eid}${suf}`
  const altw = entries.alt[id]
  if (altw) {
    return altw
  } else {
    if (!glo.glo) {
      throw new Error(`Missing 'glo' in ${JSON.stringify(glo)}`)
    }
    const { name } = e
    const r = LAST_VOWEL.exec(name)
    if (!r) {
      throw new Error(
        `Invalid word ${name} (no vowel): ${JSON.stringify({ suf, glo })}).`
      )
    }
    const def = e.definition
    const j =
      STARTS_VOWEL.test(suf) && ENDS_VOWEL.test(name)
        ? glo.join || ''
        : r.index === name.length - 1
        ? ''
        : r[1]
    const aname = name + j + suf
    const base = def.glo || def.noun
    if (!base) {
      throw new Error(`Cannot create alt for ${name} (no 'glo' or 'def')`)
    }
    return entry('alt', aname, {
      glo: base + '.' + glo.glo,
      cla: e.definition.cla,
      alt: () => e,
    })
  }
}

const CASEKEYS = Object.keys(CASES)

export const suffixAccessor = {
  get(obj: Entry, key: string) {
    if (
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
      return makeSuffix(obj, key, s.definition)
    } else {
      return (obj as any)[key]
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
  const entry = new Proxy<Entry>(
    (({
      id,
      name,
      type,
      definition,
      toString() {
        return `[${name}](${id})`
      },
    } as Partial<Entry>) as any) as Entry,
    suffixAccessor
  ) as Entry
  entries[type][id] = entry
  return entry
}

export function suffix(name: string, definition: EntryDefinition): Entry {
  const def = Object.assign({}, definition)
  const firstKey = Object.keys(def)[0]
  if (!def.glo) {
    def.glo = '*' + (def as any)[firstKey] + '*'
  }
  if (!def.suff) {
    def.suff = (def as any)[firstKey]
  }
  return entry('word', name, def)
}
