import * as _ from '../lang'
import { alt, suffix } from '../zulapa'

export const m = suffix('m', {
  def: 'accusative',
  writ: 'ం',
  glo: 'ACC',
  cla: 'noun',
  scla: 'noun',
  maxPhrases: 10,
  see: () => [_.acc, _.sub],
})

export const nam = alt('nam', {
  def: 'accusative',
  writ: 'ం',
  glo: 'ACC',
  scla: 'noun',
  alt: () => _.m,
})
