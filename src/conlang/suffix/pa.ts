import { alt, suffix } from '../zulapa'
import * as _ from '../roots'

export const pa = suffix('pa', {
  noun: 'everywhere',
  suff: 'mystery',
  see: () => [_.fi],
})

export const paM = alt('pa', {
  id: 'paM',
  suff: 'mystery',
  glo: 'MYST',
  alt: () => pa,
})
