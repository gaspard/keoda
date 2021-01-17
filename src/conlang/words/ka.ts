import * as _ from '.'

export const ka = _.word('ka', {
  noun: '4 / singularity',
  desc: () => 'That which cannot be thought.',
  pron: 'everyone',
  suffix: 'every',
  posit: 'on all fours',
  conj: 'us all, universal (1PL.DEF)',
  see: () => [_.count],
})

export const toka = _.word('toka', {
  noun: 'to us all',
  glo: 'POSS.1PL.DEF',
  see: () => [_.poss, _.tosho, _.tosha, _.toshi],
})

export const kada = _.word('kada', {
  pron: 'us all',
  glo: '1PL.DEF',
  etym: () => [_.ka, _.oda],
  see: () => [_.toka, _.kayada, _.pron],
})

export const kayada = _.word('kayada', {
  pron: 'us all (poetic)',
  glo: '1PL.DEF.POET',
  etym: () => [_.ka, _.oda],
  see: () => [_.kada, _.pron],
})

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
  see: () => [_.ganes, _.nanes],
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
  glo: '**4**',
  alt: () => _.ka,
})
