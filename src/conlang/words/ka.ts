import * as _ from '.'

export const ka = _.word('ka', {
  def: '4 / singularity',
  desc: () => 'That which cannot be thought.',
  pron: 'everyone',
  suffix: 'every',
  posit: 'on all fours',
  subj: 'us all, universal (1PL.DEF)',
  see: () => [_.count],
})

export const oka = _.word('oka', {
  def: '**we\\* all**',
  prefix: '**our\\* all**',
  suffix: '**our\\* all**',
  etym: () => [_.oS, _.ka],
  see: () => [_.subj],
})

export const kada = _.word('kada', {
  def: '**every people**',
  glo: 'every.**body**',
  etym: () => [_.ka, _.da],
  see: () => [_.subj],
})

export const hamaka = _.word('hamaka', {
  def: 'ring finger (4th finger)',
  posit: 'on all fours',
  desc: () =>
    'The position is indicated by putting the thumb on the ring finger.',
})

export const neka = _.word('neka', {
  def: 'shame',
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
  def: 'cow',
  etym: () => [_.ka, _.oda],
})

export const ka4 = _.alt('ka', {
  glo: '**4**',
  alt: () => _.ka,
})
