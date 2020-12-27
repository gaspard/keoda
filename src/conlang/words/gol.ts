import * as _ from '.'

export const gol = _.word('gol', {
  adj: 'grand',
})

export const goa = _.word('goa', {
  suffix: 'big place',
  etym: () => [_.gol, _.da],
})

export const gola = _.word('gola', {
  noun: 'squash',
  etym: () => [_.gol, _.na],
  see: () => [_.fruits],
})

export const gawi = _.word('gawi', {
  noun: 'whale',
  etym: () => [_.gol, _.awi],
})

export const goda = _.word('goda', {
  noun: 'elephant',
  etym: () => [_.gol, _.oda],
})

_.see(_.seasons)
