import { suffix } from '../make'
import * as _ from '../words'

export const ri = suffix('ri', {
  adj: 'outer',
  pref: 'outer',
  suff: 'out of (ELAT)',
  glo: 'ELAT',
  see: () => [_.ro, _.prep],
})
