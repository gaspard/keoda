import * as _ from '.'

export const ida = _.word('ida', {
  pron: 'you',
  glo: '2SG',
  etym: () => [_.i, _.oda],
  see: () => [_.iya],
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
