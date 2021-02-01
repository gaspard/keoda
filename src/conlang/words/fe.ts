import * as _ from '.'

export const fe7 = _.word('fe', {
  id: 'fe7',
  noun: '7',
  see: () => [_.fe],
})
/*
  desc: () => `
${_.phrase('I like your nakedness.', o.zu, _.nefenesti)}
  `,
  */

export const fena = _.word('fena', {
  noun: 'cabbage, February',
  mod: 'layers',
  etym: () => [_.fe, _.na],
  see: () => [_.seasons, _.food],
})

export const feo = _.word('feo', {
  mod: 'sur moi',
})

export const feoda = _.word('feoda', {
  noun: 'clothes',
  etym: () => [_.fe, _.oda],
})

export const nefe = _.word('nefe', {
  noun: '**undressed**',
  mod: 'naked',
  verb: 'to uncover/undress',
  exam: () => [
    _.phraseX('Undress !', _.nefe),
    _.phraseX('Remove your clothes !', _.neW, _.feodatim),
    _.phraseX('Undress your body !', _.nefe, _.ti.m),
  ],
})

export const fepa = _.word('fepa', {
  noun: 'pride',
  see: () => [_.ganes, _.fefi],
})

export const fefi = _.word('fefi', {
  mod: 'adapting',
  see: () => [_.nanes, _.fepa],
})

export const esyinefe = _.alt('esyinefe', {
  glo: 'PASS.2SG.DIM.**undress**',
  alt: () => _.nefe,
})

export const nefenesti = _.alt('nefenesti', {
  glo: '**naked**.BE.you1',
  alt: () => _.nefe,
})

export const feodatim = _.alt('feodatim', {
  glo: '**clothes**.you1+',
  alt: () => _.feoda,
})
