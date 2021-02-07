import { word } from '../keoda'
import * as _ from '../lang'

export const m = word('m', {
  adj: 'pleasant',
  writ: 'ం',
  suff: 'taste marking',
  glo: 'ACC+',
  force: 'noun',
  maxPhrases: 10,
  see: () => [_.n, _.h],
  desc: () => `Oxytocin (taste marking)[${_.taste.id}]`,
})
