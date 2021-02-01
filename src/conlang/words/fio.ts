import * as _ from '.'

export const fio = _.word('fio', {
  mod: 'eggplant (color)',
  see: () => [_.colors],
})

export const fiona = _.word('fiona', {
  noun: 'eggplant (vegetable)',
  etym: () => [_.fio, _.na],
})
