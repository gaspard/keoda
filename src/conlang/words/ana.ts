import * as _ from '.'

export const ana = _.word('ana', {
  noun: 'tree',
  adj: 'feminine',
})

export const anawi = _.word('anawi', {
  noun: 'medusa',
  etym: () => [_.ana, _.awi],
})

export const anoda = _.word('anoda', {
  noun: 'woman',
  desc: () => `place of the tree-self`,
  etym: () => [_.ana, _.oda],
  see: () => [_.duna],
})

export const anoto = _.word('anoto', {
  adj: 'windy tree (masc fem)',
  etym: () => [_.ana, _.oto],
})

export const aniwi = _.word('aniwi', {
  adj: 'birdly tree (enby fem)',
  etym: () => [_.ana, _.iwi],
})

// ==== alt

export const anam = _.alt('anam', {
  glo: '**feminine**.ACC',
  alt: () => _.ana,
})
