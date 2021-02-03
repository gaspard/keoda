import * as _ from '.'

export const gili = _.word('gili', {
  noun: 'tiger',
})

export const gilil = _.word('gilile', {
  noun: 'cat',
  etym: () => [_.gili, _.lil],
})
