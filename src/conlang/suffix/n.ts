import { suffix } from '../make'
import * as _ from '../words'

export const n = suffix('n', {
  adj: 'modest',
  writ: 'ఁ',
  suff: 'taste marking',
  glo: 'ACC',
  force: 'noun',
  maxPhrases: 10,
  see: () => [_.m, _.h],
  desc: () => `Modesty (taste marking)[${_.taste.id}]`,
})
