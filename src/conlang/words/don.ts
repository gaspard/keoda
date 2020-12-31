import * as _ from '.'

export const don = _.word('don', {
  prep: 'where (body)',
  glo: 'where',
  see: () => [_.dona, _.prep],
})

export const dona = _.word('dona', {
  prep: 'where (place)',
  glo: 'where',
  see: () => [_.don, _.prep],
})
