import * as _ from '.'

export const pon = _.word('pon', {
  adj: 'orange (color)',
  see: () => [_.colors],
})

export const pona = _.word('pona', {
  def: 'orange, November',
  etym: () => [_.pon, _.na],
  see: () => [_.fruits, _.seasons],
})

export const ponale = _.word('ponale', {
  def: 'tangerine, December',
  etym: () => [_.pona, _.le],
  see: () => [_.fruits, _.seasons],
})

_.see(_.seasons)
