import { word } from '../keoda'
import * as _ from '../lang'

export const gi = word('gi', {
  adj: 'kind',
  noun: 'premanence (Sthiti)',
  etym: () => [_.gu, _.i$],
  see: () => [_.go],
})

export const magi = _.word('magi', {
  verb: 'to preserve',
  see: () => [_.mahim],
  etym: () => [_.ma, _.gi],
})
