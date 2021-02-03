import * as _ from '.'

export const weis = _.word('weis', {
  adj: 'empty',
})

export const goweis = _.word('goweis', {
  noun: 'desolation',
  verb: 'to desolate',
  etym: () => [_.go, _.weis],
})

// === alt
