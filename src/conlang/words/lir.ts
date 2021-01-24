import * as _ from '.'

export const lir = _.word('lir', {
  tens: 'future',
  see: () => [_.lei, _.lem],
})
export const liri = _.word('liri', {
  tens: 'later today',
  glo: 'FUT.HOD',
  etym: () => [_.lir, _.i],
})
_.see(_.lira)
_.see(_.liru)
_.see(_.liro)
_.see(_.lire)

export const lirana = _.word('lirana', {
  noun: 'promise',
  etym: () => [_.lira, _.na],
})

export const ilir = _.word('ilir', {
  noun: 'future you (you will...)',
  etym: () => [_.i, _.lir],
})

export const elir = _.word('elir', {
  noun: 'in the future',
  glo: 'future.BE',
  etym: () => [_.e, _.lir],
})

// === alt

export const esahelir = _.alt('esahelir', {
  glo: 'PASS.3SG.**be**.FUT',
  alt: () => _.e,
})
