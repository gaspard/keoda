import * as _ from '.'

export const nu = _.word('nu', {
  adj: 'arrogance',
  noun: 'hubris',
  etym: () => [_.na, _.u$],
  see: () => [_.gu, _.nanes],
  desc: () => `
${_.nu} is the unrealized ${_.na}.

Immateriality --> Matter
`,
})

export const nuga = _.word('nuga', {
  noun: 'psychosis, god-child',
  etym: () => [_.ga, _.nu],
  see: () => [_.guna],
})

// === alt

export const nu_s = _.alt('nu', {
  glo: 'surface',
  alt: () => _.nu,
})
