import * as _ from '.'

export const same = _.word('same', {
  noun: 'foot',
  pos: 'standing',
  desc: () => `
Note that when saying "left foot" or "right foot", the terminal
'e' is dropped:

${_.phrase('left foot, right foot', _.samse, _.samwe)}`,
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

// ======= alt

export const samse = _.alt('samse', {
  glo: '**foot**.LEFT',
  alt: () => _.same,
})

export const samwe = _.alt('samwe', {
  glo: '**foot**.RIGHT',
  alt: () => _.same,
})

export const sametinam = _.alt('sametinam', {
  glo: '**foot**.you1+',
  alt: () => _.same,
})

export const sameti = _.alt('sameti', {
  glo: '**foot**.you1',
  alt: () => _.same,
})
