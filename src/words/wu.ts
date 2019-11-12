import * as _ from '.'

xxxx // wu = est possédé
xxxx // ?? = posséder
export const wu = _.word('wu', { preposition: 'de (possédé par)' })
export const diwu = _.word('diwu', { preposition: 'qui possède' })

// munwu Iris
export const munwuIris = _.example([_.mun, _.wu, _.Iris], `Les seins d'Iris`)

export const Irisdiwumun = _.example([_.Iris, _.diwu, _.mun], 'Iris, ses seins')

export const fawulama = _.word('fawulama', {
  noun: 'poisson (yeux de la mer)',
  desc: () => `Voir aussi ${_.awi}`,
})
