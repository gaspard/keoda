import * as _ from '.'

export const la = _.word('la', {
  noun: 'lèvres',
  verb: 'embrasser',
})

export const kela = _.word('kela', {
  noun: 'dent',
  derived: [_.ke, _.la],
})

export const kelasa = _.word('kelasa', {
  noun: 'couteau',
  derived: [_.kela, _.sa],
})

export const lapa = _.word('lapa', {
  verb: 'parler (les lèvres partout)',
  derived: [_.la, _.pa],
})

export const lapalapa = _.word('lapalapa', {
  noun: 'canard',
  derived: [_.lapa, _.lapa],
})

export const kelo = _.word('kelo', {
  noun: 'crocodile',
  derived: [_.kela, _.oda],
})

export const kawi = _.word('kawi', {
  noun: 'requin',
  derived: [_.kela, _.awi],
})

export const lapir = _.word('lapir', {
  noun: 'annoncer',
  derived: [_.lapa, _.elir],
})

export const gilapa = _.word('gilapa', {
  noun: 'chuchotter (la douceur parle)',
  derived: [_.gi, _.lapa],
})

export const lana = _.word('lana', {
  noun: 'parole, langage, chose des lèvres',
  derived: [_.la, _.na],
})

_.see(_.lapa)

export const lala = _.example([_.la, _.la], `Embrasse moi sur les lèvres.`)
