import * as _ from '.'

export const eri = _.word('eri', {
  def: '**cherry** (June)',
  adj: 'provocative',
  see: () => [_.fruits, _.colors, _.seasons],
})

export const muneri = _.word('muneri', {
  def: '**nipple**',
  etym: () => [_.mun, _.eri],
})

export const tajeri = _.word('tajeri', {
  def: '**glans**',
  etym: () => [_.taj, _.eri],
})

export const yoneri = _.word('yoneri', {
  def: '**clitoris**',
  see: () => [_.keyon],
  etym: () => [_.yon, _.eri],
})
