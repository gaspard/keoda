import * as _ from '.'

export const yu = _.word('yu', {
  noun: 'joy',
  prop: 'joyful',
})

export const eyu = _.word('eyu', {
  noun: 'maybe',
  prep: 'if',
  etym: () => [_.e, _.yu],
})

_.see(_.yon)

export const yuina = _.word('yuina', {
  noun: 'fruit',
  etym: () => [_.yu, _.in, _.na],
})
_.see(_.fruits)
