import * as _ from '.'

export const lei = _.word('lei', {
  noun: 'le temps',
  desc: () => `Donne ${_.lem} et ${_.lir}.`,
})
_.see(_.lem)
_.see(_.lir)

export const elei = _.word('elei', {
  noun: 'toujours',
})

export const ulei = _.word('ulei', {
  noun: `jusqu'à ce que (tirer le temps)`,
  desc: () => `De ${_.ul} et ${_.lei}`,
})

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
