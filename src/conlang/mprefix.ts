import { entry } from './make'
import {
  ENDS_VOWEL,
  Entry,
  EntryDefinition,
  MAIN_KEYS,
  STARTS_VOWEL,
} from './types'
import * as words from './words'

// =================== Lazy tricks to create common alterations
function getGlo(prev: EntryDefinition, next: EntryDefinition): string {
  const glo = prev.glo!
  if (next.force) {
    console.log('FORCE', next.force, prev.glo)
    let g = prev[next.force] || glo
    if (next.force === 'verb') {
      g = g.replace(/^ to/, '')
    }
    return '**' + g + '**.' + next.glo
  } else {
    const classGlo = prev.cla && next[prev.cla]
    if (classGlo) {
      if (prev.cla === 'verb') {
        return glo + '.**' + classGlo.replace(/^to /, '') + '**'
      } else {
        return glo + '.**' + classGlo + '**'
      }
    }
    return glo + '.' + (next.glo || next.noun || next.def || '????')
  }
}

export function prefix(
  pref: string,
  def: EntryDefinition,
  type: 'word' | 'alt' = 'word'
) {
  if (!def.glo) {
    const key = MAIN_KEYS.find(k => def[k])
    def.glo = '*' + def[key!] + '*'
  }

  // Create entry so that it has its own card.
  if (!def.pref) {
    def.pref = def.glo
  }
  const ent = entry(type, pref, def)

  const vowel = ENDS_VOWEL.test(pref)
  const SUBC: any = {}
  return new Proxy<typeof words & { $: Entry; id: string; name: string }>(
    words as any,
    {
      get(words, key) {
        if (key === '_comp') {
          return ent
        } else if (
          key === 'name' ||
          key === 'id' ||
          key === 'toString' ||
          typeof key === 'symbol'
        ) {
          return (ent as any)[key]
        } else if (key === '$') {
          return ent
        }
        const word = (words as any)[key] as Entry
        if (!word) {
          throw new Error(`Cannot find '${String(key)}' for ${pref}`)
        }
        const wname = word.name
        const nvowel = STARTS_VOWEL.test(wname)
        const name =
          pref +
          (vowel && nvowel
            ? def.join || 'h'
            : !vowel && !nvowel
            ? def.join || 'e'
            : '') +
          wname
        const ndef = (word as any)['_comp'] as Entry
        if (ndef) {
          // [composer this].[composer ndef]
          if (!SUBC[name]) {
            // Cla propagates
            SUBC[name] = prefix(
              name,
              {
                glo: def.glo + '.' + ndef.definition.glo,
                // when class is set (in suffix for example), this overrides current
                // class.
                cla: ndef.definition.cla || def.cla,
                alt: ndef.definition.alt || (() => ndef),
              },
              'alt'
            )
          }
          return SUBC[name]
        } else {
          return entry('alt', name, {
            glo: getGlo(def, word.definition),
            alt: word.definition.alt || (() => word),
            // when class is set (in suffix for example), this overrides current
            // class.
            cla: word.definition.force || def.cla,
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
  return prefix(pref, def)
}
