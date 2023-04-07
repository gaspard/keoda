import * as _ from '../lang'

export const ini = _.word('ini', {
  adj: 'thin',
})

export const inina = _.word('inina', {
  noun: 'paper',
  etym: () => [_.ini, _.na],
})

export const djin = _.word('djin', {
  noun: 'book',
  etym: () => [_.jom, _.ini],
})
