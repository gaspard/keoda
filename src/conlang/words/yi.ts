import * as _ from '.'

export const yi = _.word('yi', { adj: 'minuscule', conj: 'tu dépravé.e (2x)' })
_.see(_.yimaconj)

export const yida = _.word('yida', {
  pron: 'tu dépravé',
  etym: () => [_.yi, _.oda],
})
_.see(_.pronouns)
