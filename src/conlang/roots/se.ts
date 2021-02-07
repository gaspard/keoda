import * as _ from '../lang'

export const se = _.word('se', {
  adj: 'left',
  suff: 'left',
  see: () => [_.du, _.we, _.no],
})

export const sen = _.word('sen', {
  noun: 'here',
  see: () => [_.da],
})
