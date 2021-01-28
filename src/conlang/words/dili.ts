import * as _ from '.'

export const dili = _.word('dili', {
  def: 'claw',
})

export const pedili = _.word('pedili', {
  def: 'fork',
  etym: () => [_.pe3, _.dili],
})

// === alt

export const dilin = _.alt('dilin', {
  glo: '**claw**+',
  alt: () => _.dili,
})
