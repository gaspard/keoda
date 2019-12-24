import * as _ from '.'

export const fa = _.word('fa', {
  noun: 'yeux',
  verb: 'regarder',
  desc: () =>
    `Lorsqu’on utilise les yeux comme "récépteurs" d'un geste, ça veut dire montrer sauf si on utilise un des suffixes comme (${_.i}, ${_.u} ou ${_.o}). Par exemple ${_.mafa} versus ${_.mifa}.`,
})
_.see(_.fatio)
export const gufa = _.word('gufa', {
  noun: "pupille (vie de l'oeil)",
  derived: [_.gu, _.fa],
})

export const fama = _.example([_.fa, _.ma], 'Regarde ma main.')
export const falo = _.word('falo', {
  noun: 'yeux humides, tristesse',
  verb: 'être triste',
})
_.see(_.falam)

export const nefalo = _.example([_.ne, _.falo], 'Ne soit pas triste.')

_.see(_.mafa)
_.see(_.mifa)
_.see(_.lirmunfa)
_.see(_.ofalirmun)
_.see(_.nefa)
_.see(_.djobajimfa)
