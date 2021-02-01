import * as _ from '.'

export const don = _.word('don', {
  def: 'where (body)',
  glo: 'where',
  see: () => [_.dona, _.prep],
})

export const dona = _.word('dona', {
  def: 'where (place)',
  glo: 'where',
  see: () => [_.don, _.prep],
})
