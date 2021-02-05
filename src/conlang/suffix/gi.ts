import { suffix } from '../make'
import * as _ from '../words'

export const gi = suffix('gi', {
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
