import { EntryDefinition } from './types'

export function getCla(
  prev: EntryDefinition,
  next: EntryDefinition,
  prefix: boolean
) {
  const forced = next.force || prev.force
  if (forced) {
    return forced
  }
  const cla = prev.ncla || prev.cla!
  if (prefix && !prev.ncla) {
    // replace "weak" prefix class
    return next.cla!
  }
  return cla
}
