import * as _ from '.'

export const iki = _.word('iki', {
  adj: 'court',
  suffix: 'court',
  see: () => [_.uki, _.count],
})
