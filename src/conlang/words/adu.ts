import * as _ from '.'

export const adu = _.word('adu', {
  adj: 'close, friend',
})

export const doda = _.word('doda', {
  noun: 'dog',
  etym: () => [_.adu, _.oda],
  see: () => [_.duda],
})

// === alt

export const dodam = _.alt('dodam', {
  glo: '**dog**.ACC',
  alt: () => _.doda,
})
