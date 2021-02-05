import { suffix } from '../make'
import * as _ from '../words'

export const h = suffix('h', {
  adj: 'unpleasant',
  writ: 'ః',
  suff: 'taste marking',
  glo: 'UNP',
  force: 'noun',
  maxPhrases: 10,
  see: () => [_.m, _.n],
  desc: () => `Serotonin depletion (taste marking)[${_.taste.id}]`,
})
