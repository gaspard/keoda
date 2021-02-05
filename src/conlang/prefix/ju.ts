import { noun } from '../mprefix'
import * as _ from '../words'

export const ju = noun('ju', {
  def: 'before',
  noun: 'start',
  verb: 'to begin',
  glo: 'ANTE',
  forcedGlo: false,
  etym: () => [_.jo, _.ru],
  see: () => [_.hu],
})
