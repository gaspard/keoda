import * as _ from '../lang'
import { alt, suffix } from '../zulapa'

export const m = suffix('m', {
  def: 'accusative',
  writ: 'ం',
  glo: 'ACC',
  force: 'noun',
  maxPhrases: 10,
  desc: () => `See (accusative)[${_.acc.id}]`,
})

export const nam = alt('nam', {
  def: 'accusative',
  writ: 'ం',
  glo: 'ACC',
  force: 'noun',
  alt: () => _.m,
})
