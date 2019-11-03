import * as _ from '.'

export const gol = _.word('gol', {
  adj: 'grand',
})

export const goa = _.word('goa', {
  suffix: 'big place',
  derived: [_.gol, _.da],
})
