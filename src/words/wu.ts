import * as _ from '.'

export const wu = _.word('wu', { preposition: 'de (possédé par)' })
export const diwu = _.word('diwu', { preposition: 'qui possède' })

export const munwuSara = _.example([_.mun, _.wu, _.Iris], `Les seins de Sara`)

export const Irisdiwumun = _.example([_.Iris, _.diwu, _.mun], 'Iris, ses seins')

export const fawulama = _.word('fawulama', {
  noun: 'poisson',
  desc: () => `Voir aussi ${_.awi}`,
})
