import * as _ from '.'

export const fio = _.word('fio', {
  noun: 'aubergine (couleur)',
})

export const fiona = _.word('fiona', {
  noun: 'aubergine (légume)',
  derived: [_.fio, _.na],
})
