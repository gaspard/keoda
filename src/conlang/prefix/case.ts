import { alt, prefix } from '../keoda'
import * as _ from '../lang'

export const fu = prefix('fu', {
  def: 'by',
  noun: 'monkey',
  pref: 'by/does',
  glo: 'ERG',
  force: 'noun',
  join: '',
})

export const ju = prefix('ju', {
  def: 'before',
  noun: 'start',
  verb: 'to begin',
  glo: 'ANTE',
  forcedGlo: false,
  etym: () => [_.jo, _.ru],
  see: () => [_.hu],
})

export const juV = alt('ju', {
  id: 'juV',
  verb: 'to begin',
  alt: () => _.ju,
})

export const hu = prefix('hu', {
  def: 'after',
  noun: 'end',
  verb: 'to finish',
  glo: 'POSTE',
  etym: () => [_.ha, _.ru],
  see: () => [_.ju],
})

export const ni = prefix('ni', {
  def: 'to',
  noun: 'arrow',
  pref: 'to',
  glo: 'DAT',
  force: 'noun',
  join: '',
})

export const le = prefix('le', {
  adj: 'very',
  glo: 'ADJ',
  cla: 'adj',
  force: 'adj',
  join: '',
})

export const si = prefix('si', {
  adv: 'as',
  glo: 'ADV',
  cla: 'adv',
})

export const ne = prefix('ne', {
  def: 'negation',
  glo: 'NEG',
  join: '',
})

export const fe = prefix('fe', {
  def: 'on',
  verb: 'to cover',
  glo: 'SUPESS',
  cla: 'noun',
  exam: () => [_.phrase('I like your nakedness.', _.o.zu, _.nefe.es.ti)],
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

// yi, lo, kei
export const kei = prefix('kei', {
  // First item must be 'def' to pass class through
  def: 'honorific',
  noun: 'Master',
  adj: 'fantastic',
  suff: 'fantastic',
  glo: 'FANTASTIC',
})

// part of subject => prefix and suffix
export const lo = prefix('lo', {
  noun: 'submissive',
  suff: 'submissive',
  adj: 'wet',
  glo: 'WET',
  verb: 'to surrender',
  see: () => [_.baka],
})

// part of subject => prefix and suffix
export const yi = prefix('yi', {
  noun: 'tiny',
  suff: 'tiny',
  adj: 'tiny',
  glo: 'TINY',
  desc: () => `Innocence`,
})
