import * as _ from '.'

export const awi = _.word('awi', {
  noun: 'fish',
  verb: 'to shine',
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

export const awinesti = _.alt('awinesti', {
  glo: 'fish.magnitude.POSS.2SG',
  alt: () => _.awi,
})
