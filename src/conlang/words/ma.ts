import * as _ from '.'

export const ma = _.word('ma', {
  noun: 'main',
  verb: 'prendre dans la main, tenir',
  desc: () => `
Voir aussi les exceptions liées au suffixes.

* ${_.i} (masser, caresser)
* ${_.o} (frapper, faire mal)
* ${_.u} (tirer, pincer)

Exemple: ${_.phrase('Masse mon dos !', _.mi, _.nopi)}.

On peut aussi utiliser la négation ${_.nema} (lâcher).
`,
})
_.see(_.mahim)

export const hama = _.word('hama', {
  noun: 'doigt',
  etym: () => [_.ha, _.ma],
})

export const djoma = _.word('djoma', {
  noun: 'poignet',
  etym: () => [_.djo, _.ma],
})
_.see(_.djosam)

_.see(_.lihafma)

export const nema = _.word('nema', {
  noun: 'sans main',
  verb: 'lâcher',
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
  glo: 'hand.VERB.PULL',
  etym: () => [_.ma, _.u],
  see: () => [_.mi, _.mo],
})

export const muhamun = _.example([_.mu, _.hamun], `Tire sur mes tétons.`)

export const mafa = _.example(
  [_.ma, _.fa],
  'Montre ta main (ta main dans nos yeux).'
)
_.see(_.fama)

export const malam = _.word('malam', {
  noun: "maman (la main de l'eau)",
  etym: () => [_.ma, _.lam],
})

export const miwi = _.word('miwi', {
  noun: 'butterfly',
  etym: () => [_.mi, _.iwi],
})

export const masa = _.word('masa', {
  noun: 'pèle',
  etym: () => [_.ma, _.sa],
})

export const limasa = _.word('limasa', {
  noun: 'cuillère',
  etym: () => [_.lil, _.masa],
})

export const lilimasa = _.word('lilimasa', {
  noun: 'petite cuillère',
  etym: () => [_.lil, _.limasa],
})
