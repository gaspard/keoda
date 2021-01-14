import * as _ from '.'

export const odo = _.word('odo', {
  verb: 'to leave',
  etym: () => [_.oda, _.o],
  see: () => [_.odu, _.dau],
})

// === alt

export const ahodo = _.alt('ahodo', {
  glo: '3SG.**leave**',
  alt: () => _.odo,
})
