import * as _ from '.'

export const rum = _.word('rum', {
  noun: 'arm',
  see: () => [_.baj],
})

export const harum = _.word('harum', {
  noun: 'forearm',
})

export const djorum = _.word('djorum', {
  noun: 'upper arm',
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
})

// === alt

export const arumo = _.alt('arumo', {
  glo: '3SG.**throw**',
  alt: () => _.rumo,
})

export const irumolema = _.alt('irumolema', {
  glo: '2SG.**throw**.PST.HEST',
  alt: () => _.lema,
})
