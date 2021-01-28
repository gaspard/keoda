import * as _ from '.'

export const ro = _.word('ro', {
  suffix: 'in (INESS)',
  prefix: 'inner',
  glo: 'INESS',
  see: () => [_.ri, _.prep],
})

export const robaj = _.word('robaj', {
  def: 'inner thighs',
  etym: () => [_.ro, _.baj],
})
