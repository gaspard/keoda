import * as _ from '.'

//medium.com/keoda/du-plaisir-des-conjugaisons-df444756dfc0

export const lire = _.word('lire', {
  tens: 'eventual future (FUT.EVNT)',
  etym: () => [_.lir, _.e],
})
export const liru = _.word('liru', {
  tens: 'distant future (FUT.DIST)',
  etym: () => [_.lir, _.o],
})
export const lira = _.word('lira', {
  tens: 'close future (FUT.PROX)',
  etym: () => [_.lir, _.u],
})
export const liri = _.word('liri', {
  tens: 'tomorrow (FUT.CRAS)',
  etym: () => [_.lir, _.a],
})
export const liro = _.word('liri', {
  tens: 'later today',
  glo: 'FUT.HOD',
  etym: () => [_.lir, _.i],
})

export const lemo = _.word('lemo', {
  tens: 'earlir today (PST.HOD)',
  etym: () => [_.lem, _.i],
})
export const lemi = _.word('lemi', {
  tens: 'yesterday (PST.HEST)',
  etym: () => [_.lem, _.a],
})
export const lema = _.word('lema', {
  tens: 'recent past (PST.PROX)',
  etym: () => [_.lem, _.a],
})
export const lemu = _.word('lemu', {
  tens: 'distant past (PST.DIST)',
  etym: () => [_.lem, _.u],
})
export const leme = _.word('leme', {
  tens: 'eventual past (PST.EVNT)',
  etym: () => [_.lem, _.e],
})

export const eliro = _.alt('eliro', {
  glo: '**be**.later today',
  alt: () => _.liro,
})
