import * as _ from '../lang'

export const ka = _.word('ka', {
  noun: '4 / singularity',
  desc: () => 'That which cannot be thought.',
  def: 'everyone',
  suff: 'every',
  pos: 'on all fours',
  see: () => [_.count],
})

export const oka = _.word('oka', {
  noun: '**we\\* all**',
  pref: '**our\\* all**',
  suff: '**our\\* all**',
  etym: () => [_.o, _.ka],
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
  adj: 'restless',
  etym: () => [_.ne, _.ka],
  see: () => [_.ganes, _.nanes],
})

export const karu = _.word('karu', {
  verb: 'to choose',
  desc: () => 'The realization of the singular in onself.',
  etym: () => [_.ka, _.ru],
})

// Cow pose, quatre pattes, dos creux
export const koda = _.word('koda', {
  noun: 'cow',
  etym: () => [_.ka, _.oda],
})
