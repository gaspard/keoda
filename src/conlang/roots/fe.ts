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
  verb: 'to dress',
  etym: () => [_.fe, _.oda],
})

export const nefe = _.word('nefe', {
  adj: 'naked',
  verb: 'to uncover',
  exam: () => [
    _.phraseX('Undress (uncover).', _.nefe.imp),
    _.phraseX('Undress (remove clothes).', _.ne.feoda.imp, _.ti.m),
    _.phraseX('Uncover your body.', _.nefe.imp, _.ti.m),
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
