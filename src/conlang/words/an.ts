import * as _ from '.'

export const an = _.word('an', {
  noun: '**secret** (modesty)',
  glo: '~ (neutral)',
  suff: 'accusative marking',
  see: () => [_.am, _.ah],
  desc: () => `
See ${_.am} for details.
`,
})
