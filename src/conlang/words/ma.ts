import * as _ from '.'

export const ma = _.word('ma', {
  noun: 'hand',
  verb: 'to shake, to take',
  exam: () => [
    _.phraseX(`Wank my vulva gently.`, _.masilo, _.yin.m),
    _.phraseX(`Wank my penis intensely.`, _.madom, _.taj.m),
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
_.see(_.josame)

_.see(_.lihafma)

export const nema = _.word('nema', {
  verb: 'to let go',
  glo: 'NEG.**take**',
  etym: () => [_.neW, _.ma],
  exam: () => [_.phraseX('Drop (your) panties.', _.nema, _.feyin.m)],
})

export const mu = _.word('mu', {
  verb: 'to pull',
  glo: '**hand**.PULL',
  etym: () => [_.ma, _.u],
  see: () => [_.mi, _.mo],
})

export const malame = _.word('malame', {
  noun: 'parturient',
  etym: () => [_.ma, _.lameN],
})

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
  etym: () => [_.masa, _.le],
})

export const masalele = _.word('masalele', {
  noun: 'little spoon',
  etym: () => [_.masale, _.le],
})

// ========== alt

export const toma = _.alt('toma', {
  glo: 'wex.**hand**',
  alt: () => _.ma,
})

export const matim = _.alt('matim', {
  glo: '**hand**.you1+',
  alt: () => _.ma,
})

export const matom = _.alt('matom', {
  glo: '**hand**.wex+',
  alt: () => _.ma,
})

export const man = _.alt('man', {
  glo: '**hand**~',
  alt: () => _.ma,
})

export const fuma = _.alt('fuma', {
  glo: 'ERG.**hand**',
  alt: () => _.ma,
})

export const pemalir = _.alt('pemalir', {
  glo: 'they9.INDF.**massage**.FUT',
  alt: () => _.ma,
})

export const madom = _.alt('madom', {
  glo: '**shake**.*intensely*',
  alt: () => _.ma,
})

export const masilo = _.alt('masilo', {
  glo: '**shake**.*gently*',
  alt: () => _.ma,
})

export const mati = _.alt('mati', {
  glo: '**hand**.you1',
  alt: () => _.ma,
})

export const mawu = _.alt('mawu', {
  glo: '**hand**.POSS',
  alt: () => _.ma,
})

export const tima = _.alt('tima', {
  glo: 'you1.**hand**',
  alt: () => _.ma,
})

export const ama = _.alt('ama', {
  glo: 'they1.**hand**',
  alt: () => _.ma,
})
