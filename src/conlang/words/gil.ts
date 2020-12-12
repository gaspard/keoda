import * as _ from '.'

export const gil = _.word('gil', {
  noun: 'tigre',
})

export const gilil = _.word('gilil', {
  noun: 'chat (petit tigre)',
  etym: () => [_.gil, _.lil],
})
