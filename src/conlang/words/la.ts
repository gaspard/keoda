import * as _ from '.'

export const la = _.word('la', {
  noun: 'lèvres',
  verb: 'embrasser',
})

export const kela = _.word('kela', {
  noun: 'dent',
  etym: () => [_.ke, _.la],
})

export const kelasa = _.word('kelasa', {
  noun: 'couteau',
  etym: () => [_.kela, _.sa],
})

export const lapa = _.word('lapa', {
  verb: 'parler (les lèvres partout)',
  etym: () => [_.la, _.pa],
})

export const shalapa = _.alt('shalapa', {
  glo: '3PL.parler',
  see: () => [_.sha, _.lapa],
})

export const lapalapa = _.word('lapalapa', {
  noun: 'canard',
  etym: () => [_.lapa, _.lapa],
})

export const kelo = _.word('kelo', {
  noun: 'crocodile',
  etym: () => [_.kela, _.oda],
})

export const kawi = _.word('kawi', {
  noun: 'requin',
  etym: () => [_.kela, _.awi],
})

export const lapir = _.word('lapir', {
  noun: 'annoncer',
  etym: () => [_.lapa, _.elir],
})

export const gilapa = _.word('gilapa', {
  noun: 'chuchotter (la douceur parle)',
  etym: () => [_.gi, _.lapa],
})

export const lana = _.word('lana', {
  noun: 'parole, langage, chose des lèvres',
  etym: () => [_.la, _.na],
})

_.see(_.lapa)

export const lala = _.example([_.la, _.la], `Embrasse moi sur les lèvres.`)

// ==================== ALT
export const olalema = _.alt('olalema', {
  glo: '1SG.INDEF.kiss.PST.HEST',
  alt: () => _.la,
})
