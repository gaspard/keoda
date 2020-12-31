import * as _ from '.'

export const djil = _.word('djil', {
  noun: 'hair',
  posit: 'standing, body leaning forward, hair offered ready to be taken',
})

export const djoda = _.word('djoda', {
  noun: 'bear',
  etym: () => [_.djil, _.oda],
})

export const nedjil = _.word('nedjil', {
  noun: 'without hair',
  verb: 'to shave',
})

_.see(_.djiluki)
