import { prefix } from '../mprefix'
import * as _ from '../words'

export const si = prefix('si', {
  adv: 'as',
  glo: 'ADV',
  cla: 'adv',
  see: () => [_.esi],
})
