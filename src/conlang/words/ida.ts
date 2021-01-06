import * as _ from '.'

export const ida = _.word('ida', {
  pron: 'you',
  glo: '2SG',
  etym: () => [_.i, _.oda],
  see: () => [_.iya],
})

export const idiwi = _.word('ida', {
  pron: 'you (enby)',
  glo: '2SG.ENBY',
  etym: () => [_.ida, _.iwi],
  see: () => [_.pron, _.liwi],
})

export const idana = _.word('ida', {
  pron: 'you (fem)',
  glo: '2SG.FEM',
  etym: () => [_.ida, _.ana],
  see: () => [_.pron, _.lana],
})

export const idoto = _.word('ida', {
  pron: 'you (masc)',
  glo: '2SG.MASC',
  etym: () => [_.ida, _.oto],
  see: () => [_.pron, _.loto],
})

export const iya = _.word('iya', {
  noun: 'you (poetic)',
  glo: '2SG.POET',
  etym: () => [_.i, _.yada],
})

// ====== alt

export const idam = _.alt('idam', {
  glo: '**you**.ACC',
  alt: () => _.ti,
})
