import * as _ from '.'

export const wu = _.word('wu', { preposition: 'de' })

export const munwuSara = _.example([_.mun, _.wu, _.Iris], `Les seins de Sara`)

export const fawulama = _.word('fawulama', {
  noun: 'poisson',
  desc: () => `Voir aussi ${_.awi}`,
})
