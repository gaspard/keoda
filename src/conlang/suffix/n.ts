import * as _ from '../lang'
import { suffix } from '../zulapa'

export const n = suffix('n', {
  def: 'subordinate',
  writ: 'ఁ',
  glo: 'SUB',
  scla: 'noun',
  desc: () => `Modifies a verb into a noun: subordinate (SUB).`,
  maxPhrases: 10,
  see: () => [_.sub, _.acc],
})
