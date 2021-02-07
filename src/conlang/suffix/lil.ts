import { word } from '../keoda'
import * as _ from '../lang'

export const lil = word('lil', {
  adj: 'small',
  adv: 'carefully',
  noun: '5',
  glo: 'DIM',
  see: () => [_.count],
})
