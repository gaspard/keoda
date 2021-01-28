import * as _ from '.'

export const ana = _.word('ana', {
  def: '**tree** or **feminity**',
  adj: 'feminine',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg/330px-032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg',
  see: () => [_.subj, _.plants],
})

export const anawi = _.word('anawi', {
  def: '**medusa**',
  etym: () => [_.ana, _.awi],
})

export const anada = _.word('anoda', {
  def: '**female** (tree) **person**',
  desc: () => `place of the tree-self`,
  etym: () => [_.ana, _.da],
  see: () => [_.duna],
})

export const ananoa = _.word('ananoa', {
  def: '**bark**',
  etym: () => [_.ana, _.noa],
  see: () => [_.plants],
})

export const anama = _.word('anama', {
  def: '**leaf**',
  etym: () => [_.ana, _.ma],
  see: () => [_.plants],
})

export const anarum = _.word('anarum', {
  def: '**branch**',
  etym: () => [_.ana, _.rum],
  see: () => [_.plants],
})

export const anasame = _.word('anasame', {
  def: '**root**',
  etym: () => [_.ana, _.same],
  see: () => [_.plants],
})

export const okana = _.word('okana', {
  def: '**oak**',
  img: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Quercus_robur.jpg',
  imgpos: '50%',
  see: () => [_.ana],
})

// ==== alt

export const anah = _.alt('anah', {
  glo: '**feminine**:',
  alt: () => _.ana,
})

// irreg (should be lano but did not evolve)
export const anadam = _.alt('lanam', {
  glo: '**her**+',
  alt: () => _.anada,
})

export const okanayiam = _.alt('okanayiam', {
  glo: '**oak**.*young*+',
  alt: () => _.yile,
})

export const anayiam = _.alt('anayiam', {
  glo: '**feminine**.DIM+',
  alt: () => _.ana,
})
