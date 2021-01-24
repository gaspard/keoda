import * as _ from '.'

export const ulu = _.word('ulu', {
  noun: 'until',
  // Not sure we should keep the verb...
  verb: 'to have fun',
  etym: () => [_.u, _.lu],
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
  noun: 'asparagus, April',
  etym: () => [_.ulu, _.la],
  see: () => [_.seasons],
})
