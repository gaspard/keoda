import { suffix } from '../keoda'
import * as _ from '../lang'

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
