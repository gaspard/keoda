import { prefix, word } from '../../lang'

export const es = prefix('es', {
  noun: 'is-ness',
  suff: 'state',
  join: 'n',
  glo: 'PASS',
  // as prefix
  cla: 'verb',
  // as suffix
  // force only apply on suffix
  force: 'adj', // this is for reading
  sglo: 'IS-NESS',
  scla: 'noun', // this is for class setting
})
