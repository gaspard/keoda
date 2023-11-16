import * as _ from '../lang'

export const nux = _.word('nux', {
  noun: 'hubris',
  adj: 'arrogance',
  etym: () => [_.na, _.u$],
  see: () => [_.gu, _.nanes],
  desc: () => `
${_.nux} is the unrealized ${_.na}.

Immateriality --> Matter
`,
})

export const ganux = _.word('ganux', {
  noun: 'psychosis, god-child',
  etym: () => [_.ga, _.nux],
  see: () => [_.guna],
})
