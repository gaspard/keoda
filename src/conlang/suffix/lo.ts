import { suffix } from '../make'
import * as _ from '../words'

export const lo = suffix('lo', {
  noun: 'submissive',
  adj: 'wet',
  glo: 'WET',
  verb: 'to surrender',
  see: () => [_.baka],
})

export const silo = suffix('silo', {
  adj: 'gentle',
  desc: () => `This means "as a submissive".`,
  see: () => [_.gi],
  etym: () => [_.si, _.lo],
})
