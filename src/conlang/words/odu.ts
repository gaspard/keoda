import * as _ from '.'

export const odu = _.word('odu', {
  verb: 'to come',
  etym: () => [_.oda, _.u],
  see: () => [_.odo, _.dao],
  desc: () => `
${_.phrase('Where do you come from ?', _.dona, _.dao, _.ihodu)}
  `,
})

// ==== alt
export const ihodu = _.alt('ihodu', {
  glo: '2SG.come',
  alt: () => _.odu,
})
