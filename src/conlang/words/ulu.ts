import * as _ from '.'

export const ulu = _.word('ulu', {
  noun: 'amuser, faire rire (tirer sur la corde)',
})

export const ulutaj = _.example([_.ulu, _.taj], `Amuser le pénis.`)
export const uluyon = _.example([_.ulu, _.yon], `Amuser la vulve.`)
export const uluyaj = _.example(
  [_.ulu, _.yaj],
  `Amuser le gland (pénis, clitoris).`
)

export const uloda = _.word('uloda', {
  noun: 'clown',
  etym: () => [_.ulu, _.oda],
})

export const ulul = _.word('ulul', {
  noun: 'asperge, avril',
  etym: () => [_.ulu, _.la],
})
