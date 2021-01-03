import * as _ from '.'

export const ana = _.word('ana', {
  noun: 'tree',
  adj: 'feminine',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg/330px-032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg',
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

// ==== alt

export const anam = _.alt('anam', {
  glo: '**feminine**.ACC',
  alt: () => _.ana,
})
