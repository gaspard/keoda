import * as _ from '.'

export const eja = _.word('eja', {
  def: 'plausible',
  desc: () => 'Introduces an interogation',
  see: () => [_.neja],
  etym: () => [_.e, _.ja],
})

export const neja = _.word('neja', {
  prep: 'not possible',
  see: () => [_.eja],
  etym: () => [_.ne, _.ja],
})
