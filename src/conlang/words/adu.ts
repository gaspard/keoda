import * as _ from '.'

export const adu = _.word('adu', {
  noun: '**friend**',
  prop: 'close',
})

export const doda = _.word('doda', {
  noun: '**dog**',
  etym: () => [_.adu, _.oda],
  see: () => [_.duda],
})

// === alt

export const dodam = _.alt('dodam', {
  glo: '**dog**+',
  alt: () => _.doda,
})
