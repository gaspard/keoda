import * as _ from '.'

export const nu = _.word('nu', {
  verb: 'broder ?',
})

export const menu = _.word('menu', {
  adj: 'délicatement',
  desc: () => `De ${_.me} et ${_.nu} (...).`,
})
