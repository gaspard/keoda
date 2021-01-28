import * as _ from '.'

export const dili = _.word('dili', {
  noun: 'claw',
})

export const pedili = _.word('pedili', {
  noun: 'fork',
  etym: () => [_.pe3, _.dili],
})

// === alt

export const dilin = _.alt('dilin', {
  glo: '**claw**+',
  alt: () => _.dili,
})
