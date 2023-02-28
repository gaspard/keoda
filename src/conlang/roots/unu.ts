import * as _ from '../lang'

// unu

export const yunu = _.word('yunu', {
  noun: 'crone',
  etym: () => [_.ya, _.unu],
})

export const tanu = _.word('tanu', {
  noun: 'she',
  etym: () => [_.ta.unu],
})

// unuT

export const unuwi = _.word('unuwi', {
  noun: 'medusa',
  etym: () => [_.unuT, _.awi],
})

export const ununoa = _.word('ununoa', {
  noun: 'bark',
  etym: () => [_.unuT, _.noa],
  see: () => [_.plants],
})

export const unuma = _.word('unuma', {
  noun: 'leaf',
  etym: () => [_.unuT, _.ma],
  see: () => [_.plants, _.ish],
})

export const unurum = _.word('unurum', {
  noun: 'branch',
  etym: () => [_.unuT, _.rum],
  see: () => [_.plants],
})

export const unusam = _.word('unusam', {
  noun: 'root',
  etym: () => [_.unuT, _.sam],
  see: () => [_.plants],
})

export const okunu = _.word('okunu', {
  noun: 'oak',
  img: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Quercus_robur.jpg',
  see: () => [_.unuT],
})
