import * as _ from '.'

export const pon = _.word('pon', {
  adj: 'orange (color)',
  see: () => [_.colors],
})

export const pona = _.word('pona', {
  noun: 'orange (fruit), november',
  etym: () => [_.pon, _.na],
  see: () => [_.fruits],
})

export const ponalil = _.word('ponalil', {
  noun: 'tangerine (fruit), december',
  etym: () => [_.pona, _.lil],
  see: () => [_.fruits],
})

_.see(_.seasons)
