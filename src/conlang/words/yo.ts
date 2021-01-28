import * as _ from '.'

export const yo = _.word('yo', {
  def: 'daytime',
  see: () => [_.ya],
})

export const yogi = _.word('yogi', {
  def: `Sweet day (salutation)`,
  etym: () => [_.yo, _.gi],
  see: () => [_.yagi],
})

export const yohonagi = _.word('yohonagi', {
  def: 'Sweet dawn',
  etym: () => [_.yohon, _.gi],
})

export const teyo = _.word('teyo', {
  def: 'today',
  see: () => [_.ten, _.yo],
})

export const peyo = _.word('peyo', {
  def: 'someday',
  etym: () => [_.pe, _.yo],
})

export const lirayo = _.word('lirayo', {
  def: 'tomorrow',
  etym: () => [_.liri, _.yo],
})

export const lemayo = _.word('lemayo', {
  def: 'yesterday',
  etym: () => [_.lemi, _.yo],
})
