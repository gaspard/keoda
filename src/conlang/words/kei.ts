import * as _ from '.'

export const kei = _.word('kei', {
  conj: 'you honorific (2SG.HONOR)',
  see: () => [_.tei],
})

export const keda = _.word('keda', {
  pron: 'fantastic (Dom)',
  glo: 'you.HONOR',
  etym: () => [_.kei, _.oda],
})
_.see(_.pronouns)
