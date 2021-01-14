import * as _ from '.'

export const lei = _.word('lei', {
  noun: 'time',
  prep: 'then',
  prefix: 'time',
})

export const leu = _.word('leu', {
  prep: 'while, as',
  etym: () => [_.lei, _.u],
})

export const gulei = _.word('gulei', {
  noun: "le temps de l'expérience",
})

export const elei = _.word('elei', {
  prep: 'toujours (pas usité, on utilise lau)',
})

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
  [_.elei, _.fa, _.yon, _.ul, _.nefa],
  `(le temps est) regarde ma vulve (tirer le temps) ferme les yeux.`
  // `Toujours tu regardes ma vulve jusqu'à ce que je te dise de fermer les yeux.`
)
