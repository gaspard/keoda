import * as _ from '../words'
import { alt, suffix, word } from '../zulapa'

export const nu = suffix('nu', {
  noun: 'feeling',
  adj: 'feminine',
  glo: 'FEM',
  see: () => [_.subj],
})

export const nuda = word('nuda', {
  noun: 'woman, tree',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg/330px-032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg',
  see: () => [_.nuq, _.toda, _.wida],
  etym: () => [_.nu, _.da],
})

export const yanu = word('yanu', {
  noun: 'crone',
  etym: () => [_.ya, _.nu],
})

alt('nutom', {
  alt: () => _.to,
  id: 'nu-to-m',
  glo: 'FEM.**him**.ACC',
  cla: 'noun',
})
