import * as _ from '.'

export const ma = _.word('ma', {
  noun: 'hand',
  verb: 'to shake, to take',
  exam: () => [
    _.phraseX(`Wank my vulva gently.`, _.masilo, _.yonam),
    _.phraseX(`Wank my penis intensely.`, _.madom, _.tajam),
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
  etym: () => [_.ne, _.ma],
  exam: () => [_.phraseX('Drop (your) panties.', _.nema, _.feyonam)],
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

export const toma = _.alt('mato', {
  glo: '1SI.POSS.**hand**',
  alt: () => _.ma,
})

export const matiham = _.alt('matiham', {
  glo: '**hand**.2SG.POSS.ACC',
  alt: () => _.ma,
})

export const matoham = _.alt('matoham', {
  glo: '**hand**.1SI.POSS.ACC',
  alt: () => _.ma,
})

export const maham = _.alt('maham', {
  glo: '**hand**.ACC',
  alt: () => _.ma,
})

export const fuma = _.alt('fuma', {
  glo: 'ERG.**hand**',
  alt: () => _.ma,
})

export const ohesmalir = _.alt('ohesmalir', {
  glo: '1SI.INTR.**massage**.FUT',
  alt: () => _.ma,
})

export const pemalir = _.alt('pemalir', {
  glo: '3PL.INDF.**massage**.FUT',
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
