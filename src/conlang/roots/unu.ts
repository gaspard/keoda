import * as _ from '../lang'

export const unnu = _.word('unnu', {
  noun: 'tree',
  see: () => [_.unu, _.plants],
  pos: 'cowgirl',
  desc: () =>
    `The position means "tree-like" because the legs are like roots and the torso, arms and hair represent the trunk and branches.`,
})

export const yunu = _.word('yunu', {
  noun: 'crone',
  etym: () => [_.ya, _.nu],
})

export const tanu = _.word('tanu', {
  noun: 'she',
  etym: () => [_.sa.nu],
})

// unuT

export const unuwi = _.word('unuwi', {
  noun: 'medusa',
  etym: () => [_.unnu, _.awi],
})

export const ununoa = _.word('ununoa', {
  noun: 'bark',
  etym: () => [_.unnu, _.noa],
  see: () => [_.plants],
})

export const unuma = _.word('unuma', {
  noun: 'leaf',
  etym: () => [_.unnu, _.ma],
  see: () => [_.plants, _.ish],
})

export const unurum = _.word('unurum', {
  noun: 'branch',
  etym: () => [_.unnu, _.rum],
  see: () => [_.plants],
})

export const unusam = _.word('unusam', {
  noun: 'root',
  etym: () => [_.unnu, _.sam],
  see: () => [_.plants],
})

export const okunu = _.word('okunu', {
  noun: 'oak',
  img: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Quercus_robur.jpg',
  see: () => [_.unnu],
})
