import * as _ from '../lang'

export const pe1 = _.alt('pe', {
  id: 'pe1',
  glo: '3',
  alt: () => _.pe,
})

export const de1 = _.alt('de', {
  id: 'de1',
  glo: '2',
  alt: () => _.de,
})

export const ka1 = _.alt('ka', {
  glo: '**4**',
  alt: () => _.ka,
})

export const lil1 = _.alt('lil', {
  glo: '**5**',
  alt: () => _.lil,
})

export const shi1 = _.alt('shi', {
  glo: '6',
  alt: () => _.shi,
})

export const da1 = _.alt('da', {
  id: 'da1',
  glo: '9',
  alt: () => _.da,
})

export const ipi1 = _.alt('ipi', {
  id: 'ipi1',
  glo: '10',
  alt: () => _.ipi,
})

export const ipa1 = _.alt('ipa', {
  id: 'ipa1',
  glo: '100',
  alt: () => _.ipa,
})

export const ipu1 = _.alt('ipu', {
  id: 'ipu1',
  glo: '1000',
  alt: () => _.ipu,
})
