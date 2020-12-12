import * as _ from '.'

export const kei = _.word('kei', { conj: 'tu honorifique (2h)' })
_.see(_.keimaconj)

export const keda = _.word('keda', {
  pron: 'tu honorifique',
  etym: () => [_.kei, _.oda],
})
_.see(_.pronouns)
