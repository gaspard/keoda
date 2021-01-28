import * as _ from '.'

export const ka = _.word('ka', {
  noun: '4 / singularity',
  desc: () => 'That which cannot be thought.',
  pron: 'everyone',
  suff: 'every',
  pos: 'on all fours',
  subj: 'us all, universal (1PL.DEF)',
  see: () => [_.count],
})

export const oka = _.word('oka', {
  noun: '**we\\* all**',
  pref: '**our\\* all**',
  suff: '**our\\* all**',
  etym: () => [_.oS, _.ka],
  see: () => [_.subj],
})

export const kada = _.word('kada', {
  noun: '**every people**',
  glo: 'every.**body**',
  etym: () => [_.ka, _.da],
  see: () => [_.subj],
})

export const hamaka = _.word('hamaka', {
  noun: 'ring finger (4th finger)',
  pos: 'on all fours',
  desc: () =>
    'The position is indicated by putting the thumb on the ring finger.',
})

export const neka = _.word('neka', {
  noun: 'shame',
  prop: 'restless',
  etym: () => [_.ne, _.ka],
  see: () => [_.ganes, _.nanes],
})

export const karu = _.word('karu', {
  action: 'to choose',
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
