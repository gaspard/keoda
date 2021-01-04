import * as _ from '.'

export const hao = _.word('hao', {
  noun: 'buste',
  etym: () => [_.ha, _.oda],
})

export const haopa = _.word('haopa', {
  verb: 'to yell',
  etym: () => [_.hao, _.pa],
})

// ==== alt

export const ahaopa = _.alt('ahaopa', {
  glo: '3SG.**yell**',
  alt: () => _.haopa,
})

