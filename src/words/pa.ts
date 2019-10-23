import * as _ from '.'

export const pa = _.word('pa', {
  noun: 'everywhere, everything',
})

export const lapa = _.example([_.la, _.pa], 'Parler (ta bouche partout).')
export const paau = _.example(
  [_.pa, _.au],
  'Pardonner/humilité (tout aimer/recevoir).'
)
export const palir = _.word('palir', {
  noun: 'future/when',
  desc: () => `Everything will be`,
})

_.see(_.nepa)
_.see(_.aupa)
