import * as _ from '../lang'

export const fodi = _.word('fodi', {
  noun: 'sleep',
  verb: 'to sleep',
})

export const fodiru = _.word('fodiru', {
  verb: 'to fall asleep',
  etym: () => [_.fodi, _.ru],
})
