import * as _ from '.'

export const la = _.word('la', {
  noun: 'lips',
  action: 'to kiss',
})

export const kela = _.word('kela', {
  noun: 'teeth',
  etym: () => [_.ke, _.la],
})

export const kelasa = _.word('kelasa', {
  noun: 'knife',
  etym: () => [_.kela, _.sa],
})

export const lapa = _.word('lapa', {
  noun: 'voice',
  action: 'to talk',
  etym: () => [_.la, _.pa],
})

export const lapalapa = _.word('lapalapa', {
  noun: 'duck',
  etym: () => [_.lapa, _.lapa],
})

export const kelo = _.word('kelo', {
  noun: 'crocodile',
  etym: () => [_.kela, _.oda],
})

export const kawi = _.word('kawi', {
  noun: 'shark',
  etym: () => [_.kela, _.awi],
})

export const lapir = _.word('lapir', {
  action: 'to announce',
  etym: () => [_.lapa, _.lir],
})

export const gilapa = _.word('gilapa', {
  noun: 'to whisper',
  etym: () => [_.gi, _.lapa],
})

export const lapana = _.word('lapana', {
  noun: 'speech',
  etym: () => [_.la, _.na],
})

export const lapanagu = _.word('lanagu', {
  noun: 'insult',
  etym: () => [_.lapana, _.gu],
})

// ==================== ALT
export const olalemi = _.alt('olalemi', {
  glo: 'wex.**kiss**.PST.HEST',
  alt: () => _.la,
})

export const lan = _.alt('lan', {
  glo: '**lips**~',
  alt: () => _.la,
})

export const shalapa = _.alt('shalapa', {
  glo: 'they9.**talk**',
  alt: () => _.lapa,
  see: () => [_.shaH, _.lapa],
})

export const alapa = _.alt('alapa', {
  glo: 'they1.**talk**',
  alt: () => _.lapa,
})

export const lanagum = _.alt('lanagum', {
  glo: '**insult**+',
  alt: () => _.lapanagu,
})

export const lam = _.alt('lam', {
  glo: '**lips**+',
  alt: () => _.la,
})

export const tolapan = _.alt('tolapan', {
  glo: 'wex.**voice**+',
  alt: () => _.lapa,
})

export const lapatin = _.alt('lapatin', {
  glo: '**voice**.you1+',
  alt: () => _.lapa,
})

export const laton = _.alt('laton', {
  glo: '**lips**.wex',
  alt: () => _.la,
})

export const lapanam = _.alt('lapano', {
  glo: '**speech**+',
  alt: () => _.lapana,
})

export const alapalir = _.alt('alapalir', {
  glo: 'they1.**voice**.FUT',
  alt: () => _.lapa,
})
