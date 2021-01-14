import * as _ from '.'

export const ana = _.word('ana', {
  noun: 'tree',
  adj: 'feminine',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg/330px-032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg',
  see: () => [_.genders, _.plants],
})

export const lana = _.word('lana', {
  noun: 'she',
  glo: '3SG.FEM',
  see: () => [_.pron],
})

export const anawi = _.word('anawi', {
  noun: 'medusa',
  etym: () => [_.ana, _.awi],
})

export const anoda = _.word('anoda', {
  noun: 'woman',
  desc: () => `place of the tree-self`,
  etym: () => [_.ana, _.oda],
  see: () => [_.duna],
})

export const anoto = _.word('anoto', {
  adj: 'windy tree (masc fem)',
  etym: () => [_.ana, _.oto],
})

export const aniwi = _.word('aniwi', {
  adj: 'birdly tree (enby fem)',
  etym: () => [_.ana, _.iwi],
})

export const ananoa = _.word('ananoa', {
  noun: 'bark',
  etym: () => [_.ana, _.noa],
  see: () => [_.plants],
})

export const anama = _.word('anama', {
  noun: 'leaf',
  etym: () => [_.ana, _.ma],
  see: () => [_.plants],
})

export const anarum = _.word('anarum', {
  noun: 'branch',
  etym: () => [_.ana, _.rum],
  see: () => [_.plants],
})

export const anasame = _.word('anasame', {
  noun: 'root',
  etym: () => [_.ana, _.same],
  see: () => [_.plants],
})

export const okana = _.word('okana', {
  noun: 'oak',
  img: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Quercus_robur.jpg',
  imgpos: '50%',
  see: () => [_.ana],
})

// ==== alt

export const anam = _.alt('anam', {
  glo: '**feminine**.ACC',
  alt: () => _.ana,
})

export const lanam = _.alt('lanam', {
  glo: '**her**.ACC',
  alt: () => _.lana,
})

export const okanayiam = _.alt('okanayiam', {
  glo: '**oak**.*young*.ACC',
  alt: () => _.yile,
})

export const anayiam = _.alt('anayiam', {
  glo: '**feminine**.DIM.ACC',
  alt: () => _.ana,
})
