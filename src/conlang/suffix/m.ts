import { suffix } from '../make'
import * as _ from '../words'

export const m = suffix('m', {
  noun: 'good mood',
  writ: 'ం',
  suff: 'taste marking',
  glo: 'NICE',
  force: 'noun',
  see: () => [_.n, _.h],
  desc: () => `Oxytocin (taste marking)[${_.taste.id}]`,
})
