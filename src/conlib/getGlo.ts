import { getCla } from './getCla'
import { EntryDefinition } from './types'

export function getGlo(
  prev: EntryDefinition,
  next: EntryDefinition,
  prefix: boolean
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
      if (next.force === 'noun') {
        parts.push('**' + g + '**')
      } else {
        parts.push(g)
      }
      glo = parts.join('.')
    }
  }

  /*
  if (prefix && glo.includes('INF')) {
    // Special case. Have not found an elegant way to solve this yet...
    return glo + '.**' + next.verb! + '**'
  } else 
  */
  if (!prefix && next.sglo) {
    return glo + '.' + next.sglo
  } else if (!next.forcedGlo) {
    // Try to follow class
    const base = getCla(prev, next, false)
    let cla = base
    if (!prefix) {
      if (cla === 'noun') {
        cla = 'adj'
      } else if (cla === 'verb') {
        cla = 'adv'
      }
    }
    const nglo = next[cla] || next[base]
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
