import * as _ from '.'

export const eri = _.word('eri', {
  noun: '**cherry** (June)',
  prop: 'provocative',
  see: () => [_.fruits, _.colors, _.seasons],
})

export const muneri = _.word('muneri', {
  noun: '**nipple**',
  etym: () => [_.mun, _.eri],
})

export const tajeri = _.word('tajeri', {
  noun: '**glans**',
  etym: () => [_.taj, _.eri],
})

export const yoneri = _.word('yoneri', {
  noun: '**clitoris**',
  see: () => [_.keyon],
  etym: () => [_.yon, _.eri],
})
