import * as _ from '../lang'

export const fe7 = _.word('fe', {
  id: 'fe7',
  noun: '7',
  see: () => [_.fe],
})

export const fena = _.word('fena', {
  noun: 'cabbage, February',
  adj: 'layers',
  etym: () => [_.fe, _.na],
  see: () => [_.seasons, _.food],
})

export const feo = _.word('feo', {
  adj: 'sur moi',
})

export const feoda = _.word('feoda', {
  noun: 'clothes',
  etym: () => [_.fe, _.oda],
})

export const nefe = _.word('nefe', {
  noun: '**undressed**',
  adj: 'naked',
  verb: 'to uncover',
  exam: () => [
    _.phraseX('Undress !', _.nefe),
    _.phraseX('Remove your clothes !', _.ne, _.feoda.ti.m),
    _.phraseX('Undress your body !', _.nefe, _.ti.m),
  ],
})

export const fepa = _.word('fepa', {
  noun: 'pride',
  see: () => [_.ganes, _.fefi],
})

export const fefi = _.word('fefi', {
  adj: 'adapting',
  see: () => [_.nanes, _.fepa],
})
