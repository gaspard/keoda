import * as _ from '.'

export const oda = _.word('oda', {
  noun: '**weˣ self**',
  glo: '**wex**.self',
  etym: () => [_.oS, _.da],
})

export const keoda = _.word('keoda', {
  noun: 'hidden body language',
  etym: () => [_.ke, _.oda],
})

export const yosa = _.word('yosa', {
  noun: 'person',
  etym: () => [_.yo, _.oda],
})

export const hida = _.word('hida', {
  noun: 'sibling',
  etym: () => [_.him, _.oda],
  see: () => [_.family],
})

export const hina = _.word('hina', {
  noun: 'sister',
  etym: () => [_.him, _.ana],
  see: () => [_.family],
})
export const hiwi = _.word('hiwi', {
  noun: 'enby sibling',
  etym: () => [_.him, _.iwi],
  see: () => [_.family],
})
export const hito = _.word('hito', {
  noun: 'brother',
  etym: () => [_.him, _.oto],
  see: () => [_.family],
})

/// =============== ALT

export const odatom = _.alt('odatom', {
  glo: '**body**.wex+',
  alt: () => _.oda,
})

export const oda_adj = _.alt('oda', {
  glo: '**body**.ADJ',
  alt: () => _.oda,
})

export const tohodam = _.alt('tohodam', {
  glo: 'wex.**body**+',
  alt: () => _.oda,
})

export const odahem = _.alt('odahem', {
  glo: '**body**.*offered*',
  alt: () => _.oda,
})

export const odam = _.alt('odam', {
  glo: '**body**+',
  alt: () => _.oda,
})

export const nioda = _.alt('nioda', {
  glo: 'to.**body**',
  alt: () => _.oda,
})
