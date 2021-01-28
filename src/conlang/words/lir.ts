import * as _ from '.'

export const lir = _.word('lir', {
  tens: 'future',
  see: () => [_.lei, _.lem],
})

export const lirana = _.word('lirana', {
  def: 'promise',
  etym: () => [_.liri, _.na],
})

export const ilir = _.word('ilir', {
  def: 'future you (you will...)',
  etym: () => [_.iC, _.lir],
})

export const elir = _.word('elir', {
  def: 'in the future',
  glo: 'future.BE',
  etym: () => [_.e, _.lir],
})

// === alt

export const esahelir = _.alt('esahelir', {
  glo: 'PASS.they1.**be**.FUT',
  alt: () => _.e,
})
