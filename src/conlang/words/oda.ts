import * as _ from '.'

export const yoda = _.word('yoda', {
  noun: 'body with a vulva',
  etym: () => [_.yon, _.oda],
})

export const oda = _.word('oda', {
  noun: 'body, place of life',
  pron: 'me/us',
  adj: 'alive',
  suffix: 'animal',
  glo: '**body**',
  see: () => [_.to, _.oya, _.pron],
})

export const oya = _.word('oya', {
  pron: 'me/us (poetic)',
  glo: '1SG.INDF.POET',
  etym: () => [_.o, _.yada],
  see: () => [_.oda, _.pron],
})

export const keoda = _.word('keoda', {
  noun: 'hidden body language',
  etym: () => [_.ke, _.oda],
})

export const yosa = _.word('yosa', {
  noun: 'person',
  etym: () => [_.yo, _.oda],
})

export const odei = _.word('odei', {
  noun: 'fantastic me/us (Dom)',
  glo: '1SG.INDF.HONOR',
  etym: () => [_.oda, _.ei],
  see: () => [_.yadei, _.pron],
})

export const yadei = _.word('yadei', {
  noun: 'fantastic me/us (poetic)',
  glo: '1SG.INDF.HONOR.POET',
  etym: () => [_.yada, _.ei],
  see: () => [_.odei, _.pron],
})

export const hida = _.word('hida', {
  noun: 'sibling',
  etym: () => [_.him, _.oda],
  see: () => [_.family],
})

export const hina = _.word('hina', {
  noun: 'sister',
  etym: () => [_.him, _.oda],
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

export const odatoham = _.alt('odatoham', {
  glo: '**body**.POSS.1SG.INDF.ACC',
  alt: () => _.oda,
})

export const oda_adj = _.alt('oda', {
  glo: '**body**.ADJ',
  alt: () => _.oda,
})

export const tohodam = _.alt('tohodam', {
  glo: 'POSS.1SG.INDF.**body**.ACC',
  alt: () => _.oda,
})

export const odahem = _.alt('odahem', {
  glo: '**body**.*offered*',
  alt: () => _.oda,
})

export const odam = _.alt('odam', {
  glo: '**body**.ACC',
  alt: () => _.oda,
})

export const nioda = _.alt('nioda', {
  glo: 'DAT.**body**',
  alt: () => _.oda,
})
