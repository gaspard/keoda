import { verb } from '../mprefix'
import { plants, subj } from '../words'

export const ana = verb('ana', {
  noun: 'tree',
  mod: 'feminine',
  glo: 'FEM',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg/330px-032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg',
  see: () => [subj, plants],
})
