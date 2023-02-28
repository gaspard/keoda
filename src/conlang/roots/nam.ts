import * as _ from '../lang'

export const nam = _.word('nam', {
  noun: 'wood',
  desc: () => `
  ${_.phrase('I pick up wood', _.o.hajo, _.nam.m)}
  `,
})

export const kanam = _.word('kanam', {
  noun: 'chair',
  etym: () => [_.ka, _.nam],
})

export const namel = _.word('namel', {
  noun: 'stick',
  etym: () => [_.nam, _.el],
})

export const kenam = _.word('kenam', {
  noun: 'ash',
  etym: () => [_.ke, _.nam],
})
