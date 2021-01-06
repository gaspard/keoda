import * as _ from '.'

export const dao = _.word('dao', {
  pron: 'from',
  glo: '**from**.LOC',
  etym: () => [_.da, _.o],
  see: () => [_.odu, _.dau, _.prep],
})

export const hadau = _.word('hadau', {
  noun: 'far',
  etym: () => [_.ha, _.dao],
})
