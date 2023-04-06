import * as _ from '../lang'

export const ku = _.word('ku', {
  def: 'imply',
  noun: 'rope',
  verb: 'to tie',
  adj: 'tied',
  desc: () => `Causality`,
})

export const kude = _.word('kude', {
  noun: 'knot',
  verb: 'to make love',
  etym: () => [_.ku, _.de2],
})

export const neku = _.word('neku', {
  verb: 'to lose',
})

export const kupa = _.word('kupa', {
  noun: 'addiction',
  verb: 'to crave',
  desc: () => `
Tie everything, transactional relation to the world. Opposed to ${_.gupi} or ${_.aupa}.

See ${_.kulei}.
`,
  see: () => [_.kulei],
  etym: () => [_.ku, _.pa],
})

export const loku = _.word('loku', {
  verb: 'to allow',
  etym: () => [_.lo, _.ku],
})

export const nekupa = _.word('nekupa', {
  verb: 'to let go',
  etym: () => [_.ne, _.kupa],
  desc: () => `To not attach to everything.`,
})

export const kulei = _.word('kulei', {
  noun: 'causal time',
  verb: 'to rig',
  desc: () =>
    `To tie time, manipulate, transactional relation to time (if-then).`,
  etym: () => [_.ku, _.lei],
})

export const kuloda = _.word('kuloda', {
  noun: 'victime-bourreau-sauveu.se.r',
  desc: () => `Corps attaché.`,
  etym: () => [_.ku, _.oda],
})
