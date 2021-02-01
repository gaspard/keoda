import { suffix } from '../make'
import * as _ from '../words'

export const h = suffix('h', {
  noun: 'bad mood',
  writ: 'ః',
  suff: 'taste marking',
  glo: 'REPULS',
  force: 'noun',
  see: () => [_.m, _.n],
  desc: () => `Serotonin depletion (taste marking)[${_.taste.id}]`,
})
