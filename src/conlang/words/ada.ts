import * as _ from '.'

export const lada = _.word('lada', {
  pron: 'they',
  glo: '3SG',
  etym: () => [_.a, _.oda],
  see: () => [_.ta, _.laya, _.pron],
})

export const laya = _.word('laya', {
  pron: 'them (poetic)',
  glo: '3SG.POET',
  etym: () => [_.a, _.yada],
  see: () => [_.lada, _.pron],
})

// ==== ALT
export const ladam = _.alt('ladam', {
  glo: '**them**.ACC',
  alt: () => _.lada,
})
