import * as _ from '.'

export const la = _.word('la', {
  noun: 'lips',
  verb: 'to kiss',
})

export const lala = _.word('lala', {
  verb: 'to kiss-lips',
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

export const lapana = _.word('lana', {
  noun: 'speech',
  etym: () => [_.la, _.na],
})

export const lapanagu = _.word('lanagu', {
  noun: 'insult',
  etym: () => [_.lapana, _.gu],
})

// ==================== ALT
export const olalema = _.alt('olalema', {
  glo: '1SI.**kiss**.PST.HEST',
  alt: () => _.la,
})

export const laham = _.alt('laham', {
  glo: '**lips**.ACC',
  alt: () => _.la,
})

export const shalapa = _.alt('shalapa', {
  glo: '3PL.**talk**',
  see: () => [_.sha, _.lapa],
})

export const alapa = _.alt('alapa', {
  glo: '3SG.**talk**',
  alt: () => _.lapa,
})

export const lanaguam = _.alt('lanaguam', {
  glo: '**insult**.ACC',
  alt: () => _.lapanagu,
})

export const lam = _.alt('lam', {
  glo: '**lips**.ACC',
  alt: () => _.la,
})
