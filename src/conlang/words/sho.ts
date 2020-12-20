import * as _ from '.'

export const sho = _.word('sho', {
  conj: 'us present (1PL.PRS)',
  noun: 'saliva',
  verb: 'salivate',
})
_.see(_.shomaconj)

export const shoda = _.word('shoda', {
  noun: 'nous',
  etym: () => [_.sho, _.oda],
})
_.see(_.pronouns)

export const shoha = _.word('shoha', {
  noun: 'nous poétique',
  etym: () => [_.sho, _.yada],
})

// dem ofa noa osho
export const eliofanoaosho = _.example(
  [_.dahem, _.o, _.fa, _.noa, _.o, _.sho],
  'Quand je vois ta peau, je salive.'
)

export const onsho = _.word('onsho', {
  noun: 'sucre, récompense',
  etym: () => [_.on, _.sho],
})
