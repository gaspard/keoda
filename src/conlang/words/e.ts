import * as _ from '.'

export const e = _.word('e', {
  verb: 'to be',
  glo: 'BE',
})

export const yihe = _.alt('yihe', {
  glo: '2SG.DIM.**be**',
  alt: () => _.e,
})

// === alt

export const ahe = _.alt('ahe', {
  glo: 'they1.**be**',
  alt: () => _.e,
})

export const eliro = _.alt('eliro', {
  glo: '**be**.later today',
  alt: () => _.liro,
})

export const ohe = _.alt('ohe', {
  glo: 'wex.**be**',
  alt: () => _.e,
})

export const ihe = _.alt('ihe', {
  glo: '2SG.**be**',
  alt: () => _.e,
})

export const ohelem = _.alt('ohelem', {
  glo: 'wex.**be**.PST',
  alt: () => _.e,
})

export const ahelem = _.alt('ahelem', {
  glo: 'they1.**be**.PST',
  alt: () => _.e,
})

export const esohe = _.alt('esohe', {
  glo: 'PASS.wex.**be**',
  alt: () => _.e,
})

export const esahe = _.alt('esahe', {
  glo: 'PASS.they1.**be**',
  alt: () => _.e,
})
