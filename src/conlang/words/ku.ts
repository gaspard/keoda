import * as _ from '.'

export const ku = _.word('ku', {
  noun: 'rope',
  verb: 'to tie',
  prep: 'imply',
  desc: () => `Causality`,
})

export const kupa = _.word('kupa', {
  desc: () =>
    `Tout attacher, relation marchande au monde, "faire pour", opposé de ${_.gupi} ou ${_.aupa}.`,
  etym: () => [_.ku, _.pa],
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

export const kuoda = _.word('kuoda', {
  noun: 'victime-bourreau-sauveu.se.r',
  desc: () => `Corps attaché.`,
  etym: () => [_.ku, _.oda],
})

_.see(_.kuga)
