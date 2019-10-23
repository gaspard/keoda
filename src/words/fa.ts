import * as _ from '.'

export const fa = _.word('fa', {
  noun: 'yeux',
  verb: 'regarder',
  desc: () =>
    `Lorsqu’on utilise les yeux comme "récépteurs" d'un geste, ça veut dire montrer sauf si on utilise un des suffixes comme (${_.i}, ${_.u} ou ${_.o}). Par exemple ${_.mafa} versus ${_.mifa}.`,
})

export const fama = _.example([_.fa, _.ma], 'Regarde ma main.')
export const falo = _.word('falo', { noun: 'yeux humides', verb: 'pleurer' })
export const nefalo = _.example([_.ne, _.falo], 'Ne pleures pas.')

_.see(_.mafa)
_.see(_.mifa)
_.see(_.lirmunfa)
_.see(_.olirfamun)
_.see(_.nefa)
_.see(_.habajimfa)
