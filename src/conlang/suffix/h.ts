import { suffix } from '../zulapa'
import * as _ from '../lang'

export const h = suffix('h', {
  adj: 'unpleasant',
  writ: 'ః',
  suff: 'taste marking',
  glo: 'ACC-',
  force: 'noun',
  maxPhrases: 10,
  see: () => [_.m, _.n],
  desc: () => `Serotonin depletion (taste marking)[${_.taste.id}]`,
})
