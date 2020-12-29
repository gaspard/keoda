import * as _ from '.'

export const wu = _.word('wu', {
  prep: 'of',
  suffix: 'of',
  see: () => [_.to, _.ti, _.ta],
})

export const diwu = _.word('diwu', { prep: 'qui possède' })
_.see(_.su)

// munwu Iris
export const munwuIris = _.example([_.mun, _.wu, _.Iris], `Les seins d'Iris`)

export const Irisdiwumun = _.example([_.Iris, _.diwu, _.mun], 'Iris, ses seins')

export const fawulama = _.word('fawulama', {
  noun: 'poisson (yeux de la mer)',
  desc: () => `Voir aussi ${_.awi}`,
})
