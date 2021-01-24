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

export const ohe = _.alt('ohe', {
  glo: '1SI.**be**',
  alt: () => _.e,
})

export const ihe = _.alt('ihe', {
  glo: '2SG.**be**',
  alt: () => _.e,
})

export const ohelem = _.alt('ohelem', {
  glo: '1SI.**be**.PST',
  alt: () => _.e,
})

export const ahelem = _.alt('ahelem', {
  glo: '3SG.**be**.PST',
  alt: () => _.e,
})

export const esohe = _.alt('esohe', {
  glo: 'PASS.1SI.**be**',
  alt: () => _.e,
})

export const esahe = _.alt('esahe', {
  glo: 'PASS.3SG.**be**',
  alt: () => _.e,
})
