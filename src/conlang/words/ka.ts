import * as _ from '.'

export const ka = _.word('ka', {
  noun: '4 / singularity',
  desc: () => 'That which cannot be thought.',
  pron: 'everyone',
  suffix: 'every',
  posit: 'on all fours',
  conj: 'us all, universal (1PL.DEF)',
})
_.see(_.kamaconj)
_.see(_.counting)

export const kada = _.word('kada', {
  pron: 'us all (1PL.DEF)',
  etym: () => [_.ka, _.oda],
})
_.see(_.pronouns)

export const hamaka = _.word('hamaka', {
  noun: 'ring finger (4th finger)',
  posit: 'on all fours',
  desc: () =>
    'The position is indicated by putting the thumb on the ring finger.',
})

export const neka = _.word('neka', {
  noun: 'shame',
  adj: 'restless',
  etym: () => [_.ne, _.ka],
  see: () => [_.gunes, _.nunes],
})

export const karu = _.word('karu', {
  verb: 'to choose',
  desc: () => 'The realization of the singular in onself.',
  etym: () => [_.ka, _.ru],
})
_.see(_.ligau)

export const koda = _.word('koda', {
  noun: 'cow',
  etym: () => [_.ka, _.oda],
})

export const ka4 = _.alt('ka', {
  glo: '4',
  alt: () => _.ka,
})
