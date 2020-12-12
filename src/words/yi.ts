import * as _ from '.'

export const yi = _.word('yi', { adj: 'minuscule', conj: 'tu dépravé.e' })
_.see(_.yimaconj)

export const yida = _.word('yida', {
  pronoun: 'tu dépravé',
  derived: () => [_.yi, _.oda],
})
_.see(_.pronouns)
