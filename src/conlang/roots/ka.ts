import * as _ from '../lang'

export const ka = _.word('ka', {
  noun: '4 / singularity',
  suff: 'singular',
  glo: 'SINGULAR',
  pos: 'on all fours',
  desc: () => 'That which cannot be thought or put into words.',
  see: () => [_.count],
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
  desc: () => `
  ${_.neka} is the veil within, ${_.husona}.
  `,
  see: () => [_.ganes, _.nanes, _.husona],
})

export const karu = _.word('karu', {
  verb: 'to choose',
  desc: () => 'The realization of the singular in onself.',
  etym: () => [_.ka, _.ru],
})

// Cow pose
export const koda = _.word('koda', {
  noun: 'cow',
  etym: () => [_.ka, _.oda],
})

export const kafi = _.word('kafi', {
  noun: 'journey',
  adj: 'precious',
  etym: () => [_.ka, _.fi],
  see: () => [_.gufi, _.gufishany],
})

export const kalaj = _.word('kalaj', {
  noun: 'somebody',
  etym: () => [_.ka, _.aj],
  desc: () => `
  Being a ignited mystery, a sexual person with power to provoque changes to the world.
  `,
  see: () => [_.kalei],
})

export const kalei = _.word('kalei', {
  noun: 'puberty',
  etym: () => [_.ka, _.lei],
  desc: () => `
  Becoming unknown, singular.
  `,
})
