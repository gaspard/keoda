import * as _ from '.'

// FIXME: on rename, fix suffix/uki
export const iki = _.word('iki', {
  mod: 'court',
  suff: 'court',
  see: () => [_.uki, _.count],
})
