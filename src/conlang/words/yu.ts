import * as _ from '.'

export const yu = _.word('yu', {
  def: 'joy',
  adj: 'joyful',
})

export const eyu = _.word('eyu', {
  def: 'maybe',
  prep: 'if',
  etym: () => [_.e, _.yu],
})

_.see(_.yon)

export const yuina = _.word('yuina', {
  def: 'fruit',
  etym: () => [_.yu, _.in, _.na],
})
_.see(_.fruits)
