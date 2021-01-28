import * as _ from '.'

export const rum = _.word('rum', {
  def: 'arm',
  see: () => [_.baj],
})

export const harum = _.word('harum', {
  def: 'forearm',
})

export const djorum = _.word('djorum', {
  def: 'upper arm',
})

export const rumi = _.word('rumi', {
  verb: 'to hug',
})

export const leirumi = _.word('leirumi', {
  verb: 'to embrace time, to live',
  see: () => [_.em],
})

export const rumo = _.word('rumo', {
  verb: 'to throw',
  etym: () => [_.rum, _.oC],
})

// === alt

export const arumo = _.alt('arumo', {
  glo: 'they1.**throw**',
  alt: () => _.rumo,
})

export const irumolemi = _.alt('irumolemi', {
  glo: '2SG.**throw**.PST.HEST',
  alt: () => _.rumo,
})

// poss prefix
export const toleirumipan = _.alt('toleirumipan', {
  glo: 'wex.*time*.**embrace**.*everywhere*+',
  alt: () => _.leirumi,
})

export const rorumitim = _.alt('rorumitim', {
  glo: '*INESS*.**hug**.you1+',
  alt: () => _.ro,
})
