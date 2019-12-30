import * as _ from '.'

export const gol = _.word('gol', {
  adj: 'grand',
})

export const goa = _.word('goa', {
  suffix: 'big place',
  derived: [_.gol, _.da],
})

export const gola = _.word('gola', {
  noun: 'grande chose (courge)',
})

export const gawi = _.word('gawi', {
  noun: 'baleine',
  derived: [_.gol, _.awi],
})

export const goda = _.word('goda', {
  noun: 'éléphant',
  derived: [_.gol, _.oda],
})

_.see(_.seasons)
_.see(_.fruits)
