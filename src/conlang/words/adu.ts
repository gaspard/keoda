import * as _ from '.'

export const adu = _.word('adu', {
  noun: 'friend',
  mod: 'close',
})

export const doda = _.word('doda', {
  noun: 'dog',
  etym: () => [_.adu, _.oda],
  see: () => [_.duda],
})

// === alt
