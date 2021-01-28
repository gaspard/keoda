import * as _ from '.'

export const tan = _.word('tan', {
  def: 'sign',
})

export const tanom = _.word('tanom', {
  def: 'meaning',
  verb: 'to mean',
  etym: () => [_.tan, _.om],
})

export const tana = _.word('tanada', {
  def: 'script',
  verb: 'to write',
  etym: () => [_.tan, _.na],
})

export const tanale = _.word('tanale', {
  def: 'letter',
  etym: () => [_.tan, _.le],
})

export const fatan = _.word('fatan', {
  verb: 'to read',
  etym: () => [_.fa, _.tan],
})
