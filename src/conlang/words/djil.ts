import * as _ from '.'

export const jil = _.word('jil', {
  noun: 'hair',
  posit: 'standing, body leaning forward, hair offered ready to be taken',
})

export const gojida = _.word('gojida', {
  noun: 'bear',
  etym: () => [_.gol, _.jil, _.oda],
})

export const nejil = _.word('nejil', {
  noun: 'without hair',
  verb: 'to shave',
})

_.see(_.djiluki)
