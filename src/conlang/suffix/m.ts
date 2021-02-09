import { suffix } from '../keoda'
import * as _ from '../lang'

export const m = suffix('m', {
  adj: 'pleasant',
  writ: 'ం',
  suff: 'taste marking',
  glo: 'ACC+',
  force: 'noun',
  maxPhrases: 10,
  see: () => [_.n, _.h],
  desc: () => `Oxytocin (taste marking)[${_.taste.id}]`,
})
