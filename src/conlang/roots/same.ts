import * as _ from '../lang'

export const same = _.word('same', {
  noun: 'foot',
  pos: 'standing',
  desc: () => `
Note that when saying "left foot" or "right foot", the terminal
'e' is dropped:

${_.phrase('left foot, right foot', _.same.se, _.same.we)}`,
})

export const samoda = _.word('samoda', {
  noun: 'hero',
  glo: 'foot.person',
  etym: () => [_.same, _.oda],
})

export const fesame = _.word('fesame', {
  noun: 'socks',
})

export const hasame = _.word('hasame', {
  noun: 'toe',
})

export const josame = _.word('josame', {
  noun: 'ankle',
})
