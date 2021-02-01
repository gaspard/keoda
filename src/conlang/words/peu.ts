import * as _ from '.'

export const peu = _.word('peu', {
  noun: 'fear',
  verb: 'to fear',
})

export const agupeu = _.word('agupeu', {
  noun: 'courage',
  etym: () => [_.agu, _.peu],
})

// === alt

export const apeu = _.alt('apeu', {
  glo: 'they1.**fear**',
  alt: () => _.peu,
})
