import * as _ from '../lang'

export const ma = _.word('ma', {
  noun: 'hand',
  verb: 'to hold',
  exam: () => [
    _.phraseX(`Wank my vulva gently.`, _.ma.imp, _.si.lo, _.yin.m),
    _.phraseX(`Wank my penis intensely.`, _.ma.do, _.taj.m),
    _.phraseX('Drop (your) panties.', _.ne.ma.imp, _.feyin.m),
  ],
})

// Marina
export const my = _.word('my', {
  verb: 'to draw',
  img: 'marina_drawing.jpeg',
  desc: () =>
    `
From my encounter with Marina in Amsterdam. I decided to finally add the /j/ as
a vowel because I love the sound in slavic languages. The drawing is from her.

![drawing of crow with coffee, vinyl and chestnut leaf](/marina_drawing.jpeg)
    
© Marina Shepelska [@imaginary_marina](https://instagram.com/imaginary_marina)
`,
  etym: () => [_.ma, _.y],
})

export const hama = _.word('hama', {
  noun: 'finger',
  etym: () => [_.ha, _.ma],
})

export const djoma = _.word('djoma', {
  noun: 'wrist',
  etym: () => [_.jo, _.ma],
})

export const mu = _.word('mu', {
  verb: 'to pull',
  etym: () => [_.ma, _.u$],
  see: () => [_.mi, _.mo],
})

export const malame = _.word('malame', {
  noun: 'parturient',
  etym: () => [_.ma, _.lam],
})

// sur les fesses, les jambes font les ailes du papillon, les pieds ensemble
export const miwi = _.word('miwi', {
  noun: 'butterfly',
  etym: () => [_.mi, _.iwi],
})

export const masa = _.word('masa', {
  noun: 'shovel',
  etym: () => [_.ma, _.sa],
})

export const masale = _.word('masale', {
  noun: 'spoon',
  etym: () => [_.masa, _.lil],
})

export const masalele = _.word('masalele', {
  noun: 'little spoon',
  etym: () => [_.masale, _.lil],
})
