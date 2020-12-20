import * as _ from '.'

export const kei = _.word('kei', {
  conj: 'you honorific (2SG.HON)',
})
_.see(_.keimaconj)

export const keda = _.word('keda', {
  pron: 'you honorific',
  etym: () => [_.kei, _.oda],
})
_.see(_.pronouns)
