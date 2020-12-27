import * as _ from '.'

export const adu = _.word('adu', {
  adj: 'close, friend',
})

export const doda = _.word('dog', {
  noun: 'dog',
  etym: () => [_.adu, _.oda],
})
_.see(_.duda)
