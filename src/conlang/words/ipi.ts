import * as _ from '.'

export const ipi = _.word('ipi', {
  noun: 'memory (10)',
  see: () => [_.count],
})

// ==== alt
export const i10 = _.alt('ipi', {
  glo: '10',
  alt: () => _.ipi,
})

export const ipikauki = _.alt('ipikauki', {
  glo: '**10**.*4*.*long*',
  alt: () => _.ipi,
})

export const ipiki = _.alt('ipiki', {
  glo: '**10**.*short*',
  alt: () => _.ipi,
})

export const ipideiki = _.alt('ipideiki', {
  glo: '**10**.*2*.*short*',
  alt: () => _.ipi,
})

export const ipipeiki = _.alt('ipipeiki', {
  glo: '**10**.*3*.*short*',
  alt: () => _.ipi,
})
