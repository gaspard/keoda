import * as _ from '.'

export const pon = _.word('pon', {
  mod: 'orange (color)',
  see: () => [_.colors],
})

export const pona = _.word('pona', {
  noun: 'orange, November',
  etym: () => [_.pon, _.na],
  see: () => [_.fruits, _.seasons],
})

export const ponale = _.word('ponale', {
  noun: 'tangerine, December',
  etym: () => [_.pona, _.le],
  see: () => [_.fruits, _.seasons],
})

_.see(_.seasons)
