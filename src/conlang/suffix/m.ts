import * as _ from '../lang'
import { alt, suffix } from '../zulapa'

export const m = suffix('m', {
  def: 'accusative',
  writ: 'ం',
  glo: 'ACC',
  force: 'noun',
  maxPhrases: 10,
  see: () => [_.acc, _.sub],
})

export const nam = alt('nam', {
  def: 'accusative',
  writ: 'ం',
  glo: 'ACC',
  force: 'noun',
  alt: () => _.m,
})
