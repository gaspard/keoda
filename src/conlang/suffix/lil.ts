import { suffix } from '../make'
import * as _ from '../words'

export const lil = suffix('lil', {
  adj: 'small',
  adv: 'carefully',
  noun: '5',
  glo: 'DIM',
  see: () => [_.count],
})
