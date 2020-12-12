import * as _ from '.'

export const lei = _.word('lei', {
  noun: 'le temps',
  preposition: 'alors',
  conj: 'toujours',
  desc: () => `Donne ${_.lem} et ${_.lir}.`,
})
_.see(_.lem)
_.see(_.lir)

export const gulei = _.word('gulei', {
  noun: "le temps de l'expérience",
})
_.see(_.guda)

export const elei = _.word('elei', {
  preposition: 'toujours (pas usité, on utilise lau)',
})

export const ulei = _.word('ulei', {
  preposition: `jusqu'à ce que (tirer le temps)`,
  desc: () => `De ${_.ul} et ${_.lei} ${_.eku}`,
})
_.see(_.preposition)

export const leiuki = _.word('leiuki', {
  noun: 'patience',
  adj: 'patient.e',
  desc: () => `De ${_.lei} et ${_.uki} (temps long).`,
})

export const neleiuki = _.word('neleiuki', {
  noun: 'impatience',
  adj: 'impatient.e',
})

export const eleifayonuleinefa = _.example(
  [_.elei, _.fa, _.yon, _.ulei, _.nefa],
  `(le temps est) regarde ma vulve (tirer le temps) ferme les yeux.`
  // `Toujours tu regardes ma vulve jusqu'à ce que je te dise de fermer les yeux.`
)
