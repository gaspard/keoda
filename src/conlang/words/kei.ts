import * as _ from '.'

export const kei = _.word('kei', { conj: 'tu honorifique' })
_.see(_.keimaconj)

export const keda = _.word('keda', {
  pronoun: 'tu honorifique',
  etym: () => [_.kei, _.oda],
})
_.see(_.pronouns)
