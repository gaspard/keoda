import * as _ from '../lang'

// Comme le requin avec la tête au sol
export const awi = _.word('awi', {
  noun: 'fish',
  verb: 'to glow',
  adj: 'beautiful',
  see: () => [_.fawulama],
})

export const mawi = _.word('mawi', {
  noun: 'dolphin',
  etym: () => [_.mun, _.awi],
})

export const awiu = _.word('awiu', {
  noun: 'fin',
  verb: 'to swim',
  etym: () => [_.awi, _.u$],
})
