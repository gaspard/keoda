import * as _ from '.'

export const yu = _.word('yu', {
  noun: 'joy',
  mod: 'joyful',
})

export const yuru = _.word('yuru', {
  noun: '**vagina**',
  see: () => [_.yu, _.ru],
})

export const eyu = _.word('eyu', {
  noun: 'maybe',
  def: 'if',
  etym: () => [_.e, _.yu],
})

_.see(_.yin)

export const yuina = _.word('yuina', {
  noun: 'fruit',
  etym: () => [_.yu, _.il, _.na],
})
_.see(_.fruits)
