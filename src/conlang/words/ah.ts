import * as _ from '.'

export const ah = _.word('ah', {
  noun: '**bad mood** (serotonine depletion)',
  glo: ': (dislike)',
  suff: 'accusative marking',
  see: () => [_.am, _.an],
  desc: () => `
See ${_.am} for details.
`,
})
