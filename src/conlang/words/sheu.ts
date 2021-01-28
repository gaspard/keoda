import * as _ from '.'

export const sheu = _.word('sheu', {
  def: 'nose',
  verb: 'to breath',
  etym: () => [_.she, _.u],
  see: () => [_.shei],
})

export const sheulama = _.word('sheulama', {
  def: 'diving',
  etym: () => [_.sheu, _.lama],
})

export const gosheu = _.word('gosheu', {
  def: 'pig',
  etym: () => [_.go, _.sheu],
})

// === alt

export const isheu = _.alt('isheu', {
  glo: '2SG.**breath**',
  alt: () => _.sheu,
})
