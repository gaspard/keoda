import * as _ from '.'

export const aga = _.word('aga', {
  noun: 'music',
})
_.see(_.agu)

export const agana = _.word('agana', {
  noun: 'sound',
  etym: () => [_.aga, _.na],
})

export const agade = _.word('agade', {
  noun: 'echo',
  etym: () => [_.aga, _.de],
})

export const agauki = _.word('agauki', {
  verb: 'to resonate',
  etym: () => [_.agana, _.uki],
})

export const akida = _.word('agaukida', {
  noun: 'temple',
  etym: () => [_.agauki, _.da],
})

_.see(_.ago)

export const agadeuki = _.alt('agadeuki', {
  glo: '**echo**.*long*',
  alt: () => _.agade,
})
