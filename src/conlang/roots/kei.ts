import * as _ from '../lang'

export const kei = _.word('kei', {
  noun: 'Master',
  adj: 'fantastic',
  glo: 'FANTASTIC',
})

export const keda = _.word('keda', {
  noun: 'Master-person',
  etym: () => [_.kei, _.da],
  see: () => [_.subj],
})
