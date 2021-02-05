import { noun, prefix } from '../mprefix'
import * as _ from '../words'

export const fu = noun('fu', {
  noun: 'monkey',
  def: 'by',
  pref: 'by/does',
  glo: 'ERG',
  join: '',
})

export const ju = noun('ju', {
  def: 'before',
  noun: 'start',
  verb: 'to begin',
  glo: 'ANTE',
  forcedGlo: false,
  etym: () => [_.jo, _.ru],
  see: () => [_.hu],
})

export const hu = noun('hu', {
  def: 'after',
  noun: 'end',
  verb: 'to finish',
  glo: 'POSTE',
  etym: () => [_.ha, _.ru],
  see: () => [_.ju],
})

export const ni = noun('ni', {
  noun: 'arrow',
  def: 'to',
  pref: 'to',
  glo: 'DAT',
  force: 'noun',
  join: '',
})

export const le = prefix('le', {
  adj: 'very',
  glo: 'ADJ',
  cla: 'adj',
  join: '',
})

export const si = prefix('si', {
  adv: 'as',
  glo: 'ADV',
  cla: 'adv',
  see: () => [_.esi],
})

export const ne = prefix('ne', {
  def: 'negation',
  glo: 'NEG',
  join: '',
})

export const fe = noun('fe', {
  pref: 'on',
  verb: 'to cover',
  glo: 'SUPESS',
})

export const ro = prefix('ro', {
  adj: 'inner',
  suff: 'in (INESS)',
  pref: 'inner',
  glo: 'INESS',
  see: () => [_.ri, _.prep],
})

export const ri = prefix('ri', {
  adj: 'outer',
  pref: 'outer',
  suff: 'out of (ELAT)',
  glo: 'ELAT',
  see: () => [_.ro, _.prep],
})
