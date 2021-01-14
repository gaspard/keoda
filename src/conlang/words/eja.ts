import * as _ from '.'

export const eja = _.word('eja', {
  prep: 'plausibile',
  desc: () => 'Introduces an interogation',
  etym: () => [_.e, _.ja],
})

export const neja = _.word('neja', {
  prep: 'not possible',
  etym: () => [_.ne, _.ja],
})
