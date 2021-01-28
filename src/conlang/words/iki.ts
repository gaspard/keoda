import * as _ from '.'

export const iki = _.word('iki', {
  prop: 'court',
  suff: 'court',
  see: () => [_.uki, _.count],
})
