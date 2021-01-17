import * as _ from '.'

export const kei = _.word('kei', {
  conj: 'you honorific',
  suffix: 'fantastic/honorable',
  glo: '2SG.HONOR',
  see: () => [_.tei],
})

export const keda = _.word('keda', {
  pron: 'fantastic you (Dom)',
  glo: '2SG.HONOR',
  etym: () => [_.kei, _.oda],
  see: () => [_.keyada, _.pron],
})

export const keyada = _.word('keyada', {
  pron: 'fantastic you (poetic)',
  glo: '2SG.HONOR.POET',
  etym: () => [_.kei, _.yada],
  see: () => [_.keda, _.pron],
})
