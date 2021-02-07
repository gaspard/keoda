import * as _ from '../lang'

export const nu = _.word('nu', {
  noun: 'hubris',
  adj: 'arrogance',
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
