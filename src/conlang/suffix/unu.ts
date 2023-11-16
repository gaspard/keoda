import * as _ from '../words'
import { suffix, word } from '../zulapa'

export const nu = suffix('nu', {
  noun: 'feeling, woman, tree',
  adj: 'feminine',
  glo: 'FEM',
  see: () => [_.subj],
})

export const unu = word('unu', {
  noun: 'woman, tree',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg/330px-032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg',
  see: () => [_.unnu, _.oto, _.iwi],
})

export const unnu = word('unnu', {
  noun: 'tree',
  see: () => [_.unu, _.plants],
  pos: 'cowgirl',
  desc: () =>
    `The position means "tree-like" because the legs are like roots and the torso, arms and hair represent the trunk and branches.`,
})
