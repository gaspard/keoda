import * as _ from '../lang'
import { suffix } from '../zulapa'

export const s = suffix('s', {
  def: 'antecedent',
  glo: 'ANT',
  force: 'noun',
  see: () => [_.prep, _.subj],
})
