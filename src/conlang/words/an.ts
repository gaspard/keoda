import * as _ from '.'

export const an = _.word('an', {
  def: '**secret** (modesty)',
  glo: '~ (neutral)',
  suffix: 'accusative marking',
  see: () => [_.am, _.ah],
  desc: () => `
See ${_.am} for details.
`,
})
