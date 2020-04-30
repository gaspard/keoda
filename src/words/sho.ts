import * as _ from '.'

export const sho = _.word('sho', {
  noun: 'salive',
  verb: 'saliver',
  conj: 'nous tous présent.e.s',
})
_.see(_.shomaconj)

// dem ofa noa osho
export const eliofanoaosho = _.example(
  [_.dem, _.o, _.fa, _.noa, _.o, _.sho],
  'Quand je vois ta peau, je salive.'
)

export const onsho = _.word('onsho', {
  noun: 'sucre, récompense',
  derived: [_.on, _.sho],
})

export const shoda = _.word('shoda', {
  noun: 'nous',
})
_.see(_.pida)
