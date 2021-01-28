import * as _ from '.'

export const ah = _.word('ah', {
  def: '**bad mood** (serotonine depletion)',
  glo: ': (dislike)',
  suffix: 'accusative marking',
  see: () => [_.am, _.an],
  desc: () => `
See ${_.am} for details.
`,
})
