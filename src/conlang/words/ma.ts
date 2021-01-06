import * as _ from '.'

export const ma = _.word('ma', {
  noun: 'hand',
  verb: 'to take, to hold',
})
_.see(_.mahim)

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
  glo: 'NEG.hand.VERB',
  etym: () => [_.ne, _.ma],
})

export const mataj = _.example([_.ma, _.taj], `Prends mon pénis dans ta main.`)

export const mayonmelo = _.example(
  [_.ma, _.yon, _.silo],
  `Branle ma vulve doucement.`
)
_.see(_.nemafeyon)

export const mu = _.word('mu', {
  verb: 'to pull',
  glo: 'hand.VERB.ABL',
  etym: () => [_.ma, _.u],
  see: () => [_.mi, _.mo],
})

export const muhamun = _.example([_.mu, _.hamun], `Tire sur mes tétons.`)

export const malam = _.word('malam', {
  noun: 'mother (hand of the water)',
  etym: () => [_.ma, _.lame],
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
  glo: '1SG.INDF.POSS.**hand**',
  alt: () => _.ma,
})

export const matiham = _.alt('matiham', {
  glo: '**hand**.2SG.POSS.ACC',
  alt: () => _.ma,
})

export const matoham = _.alt('matoham', {
  glo: '**hand**.1SG.INDF.POSS.ACC',
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
  glo: '1SG.INDF.INTR.**massage**.FUT',
  alt: () => _.ma,
})

export const pemalir = _.alt('pemalir', {
  glo: '3PL.INDF.**massage**.FUT',
  alt: () => _.ma,
})
