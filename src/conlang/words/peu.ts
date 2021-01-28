import * as _ from '.'

export const peu = _.word('peu', {
  def: 'fear',
  verb: 'to fear',
})

export const agupeu = _.word('agupeu', {
  def: 'courage',
  etym: () => [_.agu, _.peu],
})

// === alt

export const apeu = _.alt('apeu', {
  glo: 'they1.**fear**',
  alt: () => _.peu,
})
