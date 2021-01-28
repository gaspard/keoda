import * as _ from '.'

export const tan = _.word('tan', {
  noun: 'sign',
})

export const tanom = _.word('tanom', {
  noun: 'meaning',
  action: 'to mean',
  etym: () => [_.tan, _.om],
})

export const tana = _.word('tanada', {
  noun: 'script',
  action: 'to write',
  etym: () => [_.tan, _.na],
})

export const tanale = _.word('tanale', {
  noun: 'letter',
  etym: () => [_.tan, _.le],
})

export const fatan = _.word('fatan', {
  action: 'to read',
  etym: () => [_.fa, _.tan],
})
