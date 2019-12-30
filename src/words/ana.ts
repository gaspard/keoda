import * as _ from '.'

export const ana = _.word('ana', {
  noun: 'arbre',
})

export const anawi = _.word('anawi', {
  noun: 'meduse',
  derived: [_.ana, _.awi],
})
