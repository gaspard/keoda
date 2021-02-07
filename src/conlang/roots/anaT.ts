import * as _ from '../lang'

export const anawi = _.word('anawi', {
  noun: 'medusa',
  etym: () => [_.anaT, _.awi],
})

export const ananoa = _.word('ananoa', {
  noun: 'bark',
  etym: () => [_.anaT, _.noa],
  see: () => [_.plants],
})

export const anama = _.word('anama', {
  noun: 'leaf',
  etym: () => [_.anaT, _.ma],
  see: () => [_.plants],
})

export const anarum = _.word('anarum', {
  noun: 'branch',
  etym: () => [_.anaT, _.rum],
  see: () => [_.plants],
})

export const anasame = _.word('anasame', {
  noun: 'root',
  etym: () => [_.anaT, _.same],
  see: () => [_.plants],
})

export const okana = _.word('okana', {
  noun: 'oak',
  img: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Quercus_robur.jpg',
  imgpos: '50%',
  see: () => [_.ana],
})
