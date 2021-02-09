import * as _ from '../lang'

export const yu = _.word('yu', {
  noun: 'joy',
  adj: 'joyful',
})

export const yuru = _.word('yuru', {
  noun: 'vagina',
  see: () => [_.yu, _.ru],
})

export const eyu = _.word('eyu', {
  noun: 'maybe',
  def: 'if',
  etym: () => [_.e, _.yu],
})

export const yil = _.word('yuina', {
  noun: 'fruit',
  etym: () => [_.yu, _.il],
})
