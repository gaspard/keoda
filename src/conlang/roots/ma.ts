import * as _ from '../lang'

export const ma = _.word('ma', {
  noun: 'hand',
  verb: 'to grab',
  exam: () => [
    _.phraseX(`Wank my vulva gently.`, _.ma.silo, _.yin.m),
    _.phraseX(`Wank my penis intensely.`, _.ma.do, _.taj.m),
    _.phraseX('Drop (your) panties.', _.ne.ma.imp, _.feyin.m),
  ],
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
  etym: () => [_.ma, _.lame],
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
