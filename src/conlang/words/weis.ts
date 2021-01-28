import * as _ from '.'

export const weis = _.word('weis', {
  prop: 'empty',
})

export const goweis = _.word('goweis', {
  noun: 'desolation',
  action: 'to desolate',
  etym: () => [_.go, _.weis],
})

// === alt

export const agoweiselem = _.alt('agoweiselem', {
  glo: 'they1.**desolation**.PST',
  alt: () => _.goweis,
})
