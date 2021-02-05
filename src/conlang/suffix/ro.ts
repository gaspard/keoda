import { suffix } from '../make'
import * as _ from '../words'

export const ro = suffix('ro', {
  adj: 'inner',
  suff: 'in (INESS)',
  pref: 'inner',
  glo: 'INESS',
  see: () => [_.ri, _.prep],
})
