import * as _ from '.'

export const la = _.word('la', {
  noun: 'lèvres',
  verb: 'embrasser',
})

export const lapa = _.word('lapa', {
  verb: 'parler (les lèvres partout)',
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
