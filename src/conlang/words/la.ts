import * as _ from '.'

export const la = _.word('la', {
  noun: 'lips',
  verb: 'to kiss',
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
  verb: 'to talk',
  etym: () => [_.la, _.pa],
})

export const shalapa = _.alt('shalapa', {
  glo: '3PL.talk',
  see: () => [_.sha, _.lapa],
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
  verb: 'to announce',
  etym: () => [_.lapa, _.elir],
})

export const gilapa = _.word('gilapa', {
  noun: 'to whisper',
  etym: () => [_.gi, _.lapa],
})

export const lana = _.word('lana', {
  noun: 'speech',
  etym: () => [_.la, _.na],
})

// ==================== ALT
export const olalema = _.alt('olalema', {
  glo: '1SG.INDF.kiss.PST.HEST',
  alt: () => _.la,
})
