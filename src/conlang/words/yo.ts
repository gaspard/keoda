import * as _ from '.'

export const yo = _.word('yo', {
  noun: 'daytime',
  see: () => [_.ya],
})

export const yogi = _.word('yogi', {
  noun: `Sweet day (salutation)`,
  etym: () => [_.yo, _.gi],
  see: () => [_.yagi],
})

export const yohonagi = _.word('yohonagi', {
  noun: 'Sweet dawn',
  etym: () => [_.yohon, _.gi],
})
