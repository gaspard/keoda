import * as _ from '.'

export const anaT = _.alt('ana', {
  id: 'anaT',
  glo: '**tree**',
  alt: () => _.ana.$,
})

export const anawi = _.word('anawi', {
  noun: 'medusa',
  etym: () => [_.anaT, _.awi],
})

export const anada = _.word('anoda', {
  noun: 'woman',
  desc: () => `place of the tree-self`,
  etym: () => [_.ana, _.da],
  see: () => [_.duna],
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

// ==== alt

export const anah = _.alt('anah', {
  glo: '**feminine**:',
  alt: () => _.ana.$,
})

export const okanayiam = _.alt('okanayiam', {
  glo: '**oak**.*young*+',
  alt: () => _.yile,
})

export const anayiam = _.alt('anayiam', {
  glo: '**feminine**.DIM+',
  alt: () => _.ana.$,
})

// NOT A WORD ! (only used as verb prefix)
export const ahana = _.alt('ahana', {
  glo: '**they1**.tree',
  alt: () => _.ana.$,
})

export const tahana = _.alt('tahana', {
  glo: '**they1**.tree',
  alt: () => _.ana.$,
})
