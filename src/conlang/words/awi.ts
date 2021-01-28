import * as _ from '.'

export const awi = _.word('awi', {
  noun: '**fish**',
  action: 'to shine, to appear',
  prop: 'beautiful',
  see: () => [_.fawulama],
})

export const mawi = _.word('mawi', {
  noun: '**dolphin**',
  etym: () => [_.mun, _.awi],
})

export const awiu = _.word('awiu', {
  noun: '**fin**',
  action: 'to swim',
  etym: () => [_.awi, _.u],
})

// === alt

export const awinesti = _.alt('awinesti', {
  glo: '**fish**.isness.you1',
  alt: () => _.awi,
})

export const ahawi = _.alt('ahawi', {
  glo: 'they1.**fish**',
  alt: () => _.awi,
})

export const okeihawi = _.alt('okeihawi', {
  glo: 'I~.HONOR.**fish**',
  alt: () => _.awi,
})

export const esahanaluhawi = _.alt('esahanaluhawi', {
  glo: 'PASS.**they1**.*female*.CONT.**fish**',
  alt: () => _.awi,
})

export const esaluhawi = _.alt('esaluhawi', {
  glo: 'PASS.**they1**.CONT.**fish**',
  alt: () => _.awi,
})
