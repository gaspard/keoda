import * as _ from '.'

export const ma = _.word('ma', {
  noun: 'main',
  verb: 'prendre dans la main, branler, tenir',
  desc: () => `
Voir aussi les exceptions liées au suffixes ${_.i} (masser, caresser), ${_.o} (frapper, faire mal) et ${_.u} (tirer, pincer): ${_.mi}, ${_.mo}, ${_.mu}. On peut aussi utiliser la négation ${_.nema} (lâcher).
`,
})
_.see(_.mahim)

export const hama = _.word('hama', {
  noun: 'doigt',
  desc: () => `De ${_.ha} (tête, moitié supérieure) et ${_.ma} (main).`,
})

export const djoma = _.word('djoma', {
  noun: 'poignet',
  desc: () => `De ${_.djo} (bas) et ${_.ma} (main).`,
})
_.see(_.djosam)

_.see(_.lihafma)

export const nema = _.word('nema', {
  noun: 'sans main',
  verb: 'lâcher',
  desc: () => `De ${_.ne} (négation) et ${_.ma} (main).`,
})

export const mataj = _.example([_.ma, _.taj], `Prends mon pénis dans ta main.`)

export const mayonmelo = _.example(
  [_.ma, _.yon, _.silo],
  `Branle ma vulve doucement.`
)
_.see(_.nemafeyon)

export const mu = _.word('mu', {
  verb: 'tirer, pincer avec la main',
  desc: () => `De ${_.ma} (main) et le suffix ${_.u}.`,
})

export const muhamun = _.example([_.mu, _.hamun], `Tire sur mes tétons.`)

export const mafa = _.example(
  [_.ma, _.fa],
  'Montre ta main (ta main dans nos yeux).'
)
_.see(_.fama)

export const malam = _.word('malam', {
  noun: "maman (la main de l'eau)",
  derived: [_.ma, _.lam],
})

export const miwi = _.word('miwi', {
  noun: 'papillon',
  derived: [_.mi, _.iwi],
})

export const masa = _.word('masa', {
  noun: 'pèle',
  derived: [_.ma, _.sa],
})

export const limasa = _.word('limasa', {
  noun: 'cuillère',
  derived: [_.lil, _.masa],
})

export const lilimasa = _.word('lilimasa', {
  noun: 'petite cuillère',
  derived: [_.lil, _.limasa],
})
