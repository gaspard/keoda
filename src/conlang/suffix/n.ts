import * as _ from '../lang'
import { suffix } from '../zulapa'

export const n = suffix('n', {
  def: 'subordinate',
  writ: 'ఁ',
  glo: 'SUB',
  scla: 'noun',
  maxPhrases: 10,
  see: () => [_.sub, _.acc],
})
