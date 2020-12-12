import * as _ from '.'

export const naj = _.word('naj', {
  noun: 'frisson, nuage',
  verb: 'frissonner',
})

export const najlo = _.word('najlo', {
  noun: 'orgasme,pluie',
})

export const najapa = _.word('najapa', {
  noun: 'brouillard',
  desc: () => `De ${_.naj} (nuage) et ${_.pa} (partout).`,
})
