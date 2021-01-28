import * as _ from '.'

export const odu = _.word('odu', {
  action: 'to come',
  etym: () => [_.oda, _.u],
  see: () => [_.odo, _.dao],
  exam: () => [_.phrase('Where do you come from ?', _.dao, _.ihodu, _.q)],
})

// ==== alt
export const ihodu = _.alt('ihodu', {
  glo: '2SG.**come**',
  alt: () => _.odu,
})
