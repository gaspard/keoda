import * as _ from '.'

export const yu = _.word('yu', {
  noun: 'joie',
  adj: 'joyeux',
})

export const eyu = _.word('eyu', {
  preposition: 'si',
  desc: () => `Être joyeux = être tellement = si xxx`,
  derived: [_.e, _.yu],
})

_.see(_.yon)

export const yuina = _.word('yuina', {
  noun: 'fruit',
  derived: [_.yu, _.in, _.na],
})
_.see(_.fruits)
