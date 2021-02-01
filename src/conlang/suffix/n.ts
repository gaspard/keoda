import { suffix } from '../make'
import * as _ from '../words'

export const n = suffix('n', {
  noun: 'modesty',
  writ: 'ఁ',
  suff: 'taste marking',
  glo: 'ACC',
  force: 'noun',
  see: () => [_.m, _.h],
  desc: () => `Modesty (taste marking)[${_.taste.id}]`,
})
