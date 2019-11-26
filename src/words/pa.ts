import * as _ from '.'

export const pa = _.word('pa', {
  noun: 'tout, le mystère',
})

export const lapa = _.word('lapa', {
  verb: 'parler (les lèvres partout)',
})

export const pahau = _.word('pahau', {
  verb: 'pardonner (tout recevoir)',
  desc: () =>
    `${_.aupa} et ${_.pahau} sont la même chose exprimés depuis des lieux un peu différents. La gratitude et le pardon, c'est pareil. Pardonner ${_.pahau} c'est enfin recevoir ce qui nous est arrivé (et ce qu'on a fait), c'est un peu lié au passé. La gratitude, c'est recevoir le présent ${_.aupa}. La confiance, c'est recevoir le temps entier ${_.augu} (passé, présent, avenir), accepter le processus de vie.`,
})

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
