import * as _ from '../roots'
import { alt, suffix } from '../zulapa'

export const pa = suffix('pa', {
  noun: 'all',
  suff: 'mystery',
  glo: 'ALL',
  see: () => [_.fi],
})

export const paM = alt('pa', {
  id: 'paM',
  suff: 'mystery',
  glo: 'MYST',
  alt: () => pa,
})
