import * as _ from '.'

export const lei = _.word('lei', {
  noun: 'time',
  prep: 'then',
  tens: 'always',
})
_.see(_.lem)
_.see(_.lir)

export const gulei = _.word('gulei', {
  noun: "le temps de l'expérience",
})
_.see(_.guda)

export const elei = _.word('elei', {
  prep: 'toujours (pas usité, on utilise lau)',
})

export const ulei = _.word('ulei', {
  prep: 'until',
  see: () => [_.uya],
  etym: () => [_.u, _.lei],
})
_.see(_.prep)

export const leiuki = _.word('leiuki', {
  noun: 'patience',
  adj: 'patient',
  etym: () => [_.lei, _.uki],
})

export const neleiuki = _.word('neleiuki', {
  noun: 'impatience',
  adj: 'impatient',
  etym: () => [_.ne, _.leiuki],
})

export const eleifayonuleinefa = _.example(
  [_.elei, _.fa, _.yon, _.ulei, _.nefa],
  `(le temps est) regarde ma vulve (tirer le temps) ferme les yeux.`
  // `Toujours tu regardes ma vulve jusqu'à ce que je te dise de fermer les yeux.`
)
