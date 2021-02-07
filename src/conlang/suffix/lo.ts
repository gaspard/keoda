import { word } from '../keoda'
import * as _ from '../lang'

export const lo = word('lo', {
  noun: 'submissive',
  adj: 'wet',
  glo: 'WET',
  verb: 'to surrender',
  see: () => [_.baka],
})

export const silo = word('silo', {
  adj: 'gentle',
  desc: () => `This means "as a submissive".`,
  see: () => [_.gi],
  etym: () => [_.si, _.lo],
})
