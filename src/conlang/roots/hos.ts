import * as _ from '../lang'

export const hos = _.word('hos', {
  noun: 'gap, trust',
  verb: 'to split',
  adj: 'wide open',
  adv: 'trustingly',
})

export const shehos = _.word('shehos', {
  adj: 'surprised',
  noun: 'surprise',
  etym: () => [_.she, _.hos],
})
