import * as _ from '../lang'

export const pal = _.word('pal', {
  noun: 'butt',
})

export const palil = _.word('palil', {
  noun: 'apricot, July',
  etym: () => [_.pal, _.lil],
  see: () => [_.fruits, _.seasons],
})

export const kepal = _.word('kepal', {
  noun: 'anus',
  etym: () => [_.ke, _.pal],
})
