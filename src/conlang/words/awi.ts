import * as _ from '.'

export const awi = _.word('awi', {
  noun: 'fish',
  verb: 'to shine, to appear',
  adj: 'beautiful',
  see: () => [_.fawulama],
})

export const mawi = _.word('mawi', {
  noun: 'dolphin',
  etym: () => [_.mun, _.awi],
})

export const awiu = _.word('awiu', {
  verb: 'to swim',
  etym: () => [_.awi, _.u],
})

// === alt

export const awinesti = _.alt('awinesti', {
  glo: '**fish**.magnitude.POSS.2SG',
  alt: () => _.awi,
})

export const ahawi = _.alt('ahawi', {
  glo: '3SG.**appear**',
  alt: () => _.awi,
})
