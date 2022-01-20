import * as _ from '../lang'

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
  noun: 'voice',
  verb: 'to talk',
  etym: () => [_.la, _.pa],
})

export const lapu = _.word('lapu', {
  noun: 'request',
  verb: 'to request',
  etym: () => [_.lapa, _.u$],
})

// Debout, une jambe derrière soi, tenue par une main (même côté), l'autre devant soi
export const lapalapa = _.word('lapalapa', {
  noun: 'duck',
  etym: () => [_.lapa, _.lapa],
})

// plank pose
export const kelo = _.word('kelo', {
  noun: 'crocodile',
  etym: () => [_.kela, _.oda],
})

// Couché sur le ventre, les bras en arrière, les jambes au-dessus du sol (dos un peu cambré)
export const kawi = _.word('kawi', {
  noun: 'shark',
  etym: () => [_.kela, _.awi],
})

export const lapir = _.word('lapir', {
  verb: 'to announce',
  etym: () => [_.lapa, _.ir],
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
