import * as _ from '.'

//medium.com/keoda/du-plaisir-des-conjugaisons-df444756dfc0

export const lire = _.word('lire', {
  noun: '**eventual future**',
  tens: 'FUT.EVNT',
  etym: () => [_.lir, _.e],
})
export const liru = _.word('liru', {
  noun: '**distant future**',
  tens: 'FUT.DIST',
  etym: () => [_.lir, _.u],
})
export const lira = _.word('lira', {
  noun: '**near future**',
  tens: 'FUT.PROX',
  etym: () => [_.lir, _.aC],
})
export const liri = _.word('liri', {
  noun: '**tomorrow**',
  tens: 'FUT.CRAS',
  etym: () => [_.lir, _.iC],
})
export const liro = _.word('liro', {
  noun: 'later today',
  tens: 'FUT.HOD',
  etym: () => [_.lir, _.oC],
})

export const lemo = _.word('lemo', {
  noun: '**earlier today**',
  tens: 'PST.HOD',
  etym: () => [_.lem, _.oC],
})
export const lemi = _.word('lemi', {
  noun: '**yesterday**',
  tens: 'PST.HEST',
  etym: () => [_.lem, _.iC],
})
export const lema = _.word('lema', {
  noun: '**recent past**',
  tens: 'PST.PROX',
  etym: () => [_.lem, _.aC],
})
export const lemu = _.word('lemu', {
  noun: '**distant past**',
  tens: 'PST.DIST',
  etym: () => [_.lem, _.u],
})
export const leme = _.word('leme', {
  noun: '**eventual past**',
  tens: 'PST.EVNT',
  etym: () => [_.lem, _.e],
})
