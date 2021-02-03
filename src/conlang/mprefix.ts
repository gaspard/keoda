import { getGlo, entry, joinMorphemes, getCla } from './make'
import { Entry, EntryDefinition, isNativeKey, MAIN_KEYS } from './types'
import * as words from './words'

export function prefix(
  pref: string,
  prev: EntryDefinition,
  type: 'word' | 'alt' = 'word'
) {
  if (!prev.glo) {
    const key = MAIN_KEYS.find(k => prev[k])
    prev.glo = '*' + prev[key!] + '*'
  }

  // Create entry so that it has its own card.
  if (!prev.pref) {
    prev.pref = prev.glo
  }
  const ent = entry(type, pref, prev)

  const SUBC: any = {}
  return new Proxy<typeof words & { $: Entry; id: string; name: string }>(
    words as any,
    {
      get(words, key) {
        if (key === '_comp') {
          return ent
        } else if (isNativeKey(key)) {
          return (ent as any)[key]
        } else if (key === '$') {
          return ent
        }
        const next = (words as any)[key] as Entry
        if (!next) {
          throw new Error(`Cannot find '${String(key)}' for ${pref}`)
        }
        const name = joinMorphemes(pref, next.name, prev.join, 'prefix')
        const ndef = (next as any)['_comp'] as Entry
        if (ndef) {
          // [composer this].[composer ndef]
          if (!SUBC[name]) {
            // Cla propagates
            SUBC[name] = prefix(
              name,
              {
                glo: prev.glo + '.' + ndef.definition.glo,
                // When joining prefixes, the first prefix sets the class
                cla: prev.cla,
                alt: ndef.definition.alt || (() => ndef),
              },
              'alt'
            )
          }
          return SUBC[name]
        } else {
          return entry('alt', name, {
            glo: getGlo(prev, next.definition, true),
            alt: next.definition.alt || (() => next),
            cla: getCla(prev, next.definition, true),
          })
        }
      },
    }
  )
}

export function verb(pref: string, def: EntryDefinition) {
  def.cla = 'verb'
  return prefix(pref, def)
}

export function noun(pref: string, def: EntryDefinition) {
  def.cla = 'noun'
  return prefix(pref, def)
}

export function poss(pref: string, def: EntryDefinition) {
  def.cla = 'noun'
  // Next is forced as a noun
  def.force = 'noun'
  return prefix(pref, def)
}

export function adj(pref: string, def: EntryDefinition) {
  def.cla = 'adj'
  // Next is forced as a noun
  def.force = 'noun'
  return prefix(pref, def)
}
