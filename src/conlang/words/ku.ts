import * as _ from '.'

export const ku = _.word('ku', {
  noun: 'corde',
  verb: 'attacher',
})

export const kupa = _.word('kupa', {
  desc: () =>
    `Tout attacher, relation marchande au monde, "faire pour", opposé de ${_.gupi} ou ${_.aupa}.`,
  etym: () => [_.ku, _.pa],
})

export const nekupa = _.word('nekupa', {
  noun: 'lâcher prise, ne pas attacher tout',
  etym: () => [_.ne, _.kupa],
})

export const kulei = _.word('kulei', {
  noun: 'causal time',
  verb: 'to rig',
  desc: () =>
    `Attacher le temps, manipuler, relation marchande au temps (si alors).`,
  etym: () => [_.ku, _.lei],
})

export const kuoda = _.word('kuoda', {
  noun: 'victime-bourreau-sauveu.se.r',
  desc: () => `Corps attaché.`,
  etym: () => [_.ku, _.oda],
})

_.see(_.kuga)
