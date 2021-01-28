import * as _ from '.'

export const fe = _.word('fe', {
  def: '7',
  prefix: 'on (SUPESS)',
  verb: 'to cover, to be on top',
  glo: 'SUPESS',
  desc: () => `
${_.phrase('I like your nakedness.', _.ozu, _.nefenesti)}
  `,
  see: () => [_.prep],
})

export const fena = _.word('fena', {
  def: 'cabbage, February',
  adj: 'layers',
  etym: () => [_.fe, _.na],
  see: () => [_.seasons, _.food],
})

export const feo = _.word('feo', {
  adv: 'sur moi',
})

export const feoda = _.word('feoda', {
  def: 'clothes',
  etym: () => [_.fe, _.oda],
})

export const nefe = _.word('nefe', {
  adj: 'naked',
  verb: 'to uncover/undress',
  exam: () => [
    _.phraseX('Undress !', _.nefe),
    _.phraseX('Remove your clothes !', _.ne, _.feodatim),
    _.phraseX('Undress your body !', _.nefe, _.tim),
  ],
})

export const fepa = _.word('fepa', {
  def: 'pride',
  see: () => [_.ganes, _.fefi],
})

export const fefi = _.word('fefi', {
  adj: 'adapting',
  see: () => [_.nanes, _.fepa],
})

export const afe = _.alt('afe', {
  glo: 'they1.**cover**',
  alt: () => _.fe,
})

export const okeinefelir = _.alt('okeinefelir', {
  glo: '1SG.HONOR.**undress**.FUT',
  alt: () => _.nefe,
})

export const piyinefelir = _.alt('piyinefelir', {
  glo: '1SG.DIM.**undress**.FUT',
  alt: () => _.nefe,
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
