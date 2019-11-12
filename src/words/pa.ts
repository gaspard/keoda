import * as _ from '.'

export const pa = _.word('pa', {
  noun: 'everywhere, everything',
})

export const lapa = _.example([_.la, _.pa], 'Parler (ta bouche partout).')

// ?? aupa = aimer tout
// ?? paau (pahau) = joindre, lier l'amour ?
export const paau = _.example(
  [_.pa, _.au],
  'Pardonner/humilité (tout aimer/recevoir).'
)

export const paoda = _.word('paoda', {
  pronoun: 'tou.te.s',
})

// ohora de inefe.
export const ohoradeinefe = _.example(
  [_.o, _.ora, _.de, _.i, _.nefe],
  `J'aime que tu sois nue.`
)

_.see(_.nepa)
_.see(_.aupa)
