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

export const teyo = _.word('teyo', {
  noun: 'today',
  see: () => [_.ten, _.yo],
})

export const peyo = _.word('peyo', {
  noun: 'someday',
  etym: () => [_.pe, _.yo],
})

export const lirayo = _.word('lirayo', {
  noun: 'tomorrow',
  etym: () => [_.lira, _.yo],
})

export const lemayo = _.word('lemayo', {
  noun: 'yesterday',
  etym: () => [_.lema, _.yo],
})
