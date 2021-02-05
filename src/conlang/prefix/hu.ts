import { noun } from '../mprefix'
import * as _ from '../words'

export const hu = noun('hu', {
  def: 'after',
  noun: 'end',
  verb: 'to finish',
  glo: 'POSTE',
  etym: () => [_.ha, _.ru],
  see: () => [_.ju],
})
