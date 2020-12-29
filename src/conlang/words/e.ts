import * as _ from '.'

export const e = _.word('e', {
  verb: 'to be',
  prefix: 'passiv',
  glo: 'BE',
})

export const eho = _.word('eho', {
  conj: 'I/we passiv',
  glo: '1SG.INDF.PAS',
  etym: () => [_.e, _.o],
})

export const ehi = _.word('ehi', {
  conj: 'you passiv',
  glo: '2SG.PAS',
  etym: () => [_.e, _.i],
  see: () => [_.zi],
})

export const eha = _.word('eha', {
  conj: 'they',
  glo: '3SG.PAS',
  etym: () => [_.e, _.a],
  see: () => [_.za],
})

_.see(_.edjil)
_.see(_.enopisamdjobajom)
