import * as _ from '.'

export const weis = _.word('weis', {
  adj: 'empty',
})

export const goweis = _.word('goweis', {
  noun: 'desolate',
  verb: 'to desolate',
  etym: () => [_.go, _.weis],
})

// === alt

export const agoweiselem = _.alt('agoweiselem', {
  glo: '3SG.**desolate**.PST',
  alt: () => _.goweis,
})
