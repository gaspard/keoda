import * as _ from '.'

export const nu = _.word('nu', {
  verb: 'broder (le truc solitaire, concentré.e)',
})
_.see(_.pinu)

export const sinu = _.word('sinu', {
  adj: 'délicatement',
  desc: () => `De ${_.si} et ${_.nu} (...).`,
})
