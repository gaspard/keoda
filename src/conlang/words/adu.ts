import * as _ from '.'

export const adu = _.word('adu', {
  def: '**friend**',
  adj: 'close',
})

export const doda = _.word('doda', {
  def: '**dog**',
  etym: () => [_.adu, _.oda],
  see: () => [_.duda],
})

// === alt

export const dodam = _.alt('dodam', {
  glo: '**dog**+',
  alt: () => _.doda,
})
