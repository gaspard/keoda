import * as _ from '.'

export const eja = _.word('eja', {
  noun: 'plausible',
  desc: () => 'Introduces an interogation',
  see: () => [_.neja],
  etym: () => [_.e, _.ja],
})

export const neja = _.word('neja', {
  def: 'not possible',
  see: () => [_.eja],
  etym: () => [_.neW, _.ja],
})
