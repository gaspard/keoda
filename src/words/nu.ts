import * as _ from '.'

export const nu = _.word('nu', {
  verb: 'broder ?',
})

export const sinu = _.word('sinu', {
  adj: 'délicatement',
  desc: () => `De ${_.si} et ${_.nu} (...).`,
})
