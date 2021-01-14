import * as _ from '.'

export const eri = _.word('eri', {
  adj: 'cherry (color)',
  glo: '**cherry** (color)',
  see: () => [_.colors],
})

export const erina = _.word('erina', {
  noun: 'cherry, June',
  see: () => [_.fruits, _.seasons],
})
_.see(_.seasons)
_.see(_.fruits)

export const muneri = _.word('muneri', {
  noun: 'nipple',
  etym: () => [_.mun, _.eri],
})

export const tajeri = _.word('tajeri', {
  noun: 'glans',
  etym: () => [_.taj, _.eri],
})

export const yoneri = _.word('yoneri', {
  noun: 'clitoris',
  see: () => [_.keyon],
  etym: () => [_.yon, _.eri],
})
