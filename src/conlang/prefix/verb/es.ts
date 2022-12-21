// verb cases
import { prefix } from '../../zulapa'

export const es = prefix('es', {
  noun: 'is-ness',
  suff: 'state',
  glo: 'PASS',
  cla: 'verb',
  // force only apply on suffix
  // but suffix makes a noun (scla) so why do we have "adj" here ?
  force: 'adj',
  sjoin: 'n',
  sglo: 'IS-NESS',
  scla: 'noun',
})
