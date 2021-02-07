import * as _ from '../lang'

export const ora = _.word('ora', {
  noun: 'excitement',
  verb: 'to desire',
})

export const orago = _.word('orago', {
  verb: 'to prefer',
  etym: () => [_.ora, _.go],
})
