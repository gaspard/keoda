import * as _ from '.'

export const dai = _.word('dai', {
  pron: 'from',
  glo: 'from.LOC',
  etym: () => [_.i, _.da],
  see: () => [_.dau, _.prep],
})

export const hadai = _.word('hadai', {
  noun: 'far',
  etym: () => [_.ha, _.dai],
})
