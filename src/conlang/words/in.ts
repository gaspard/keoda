import * as _ from '.'

const _in = _.word('in', {
  prop: 'warm',
})
export { _in as in }

export const odin = _.word('odin', {
  noun: 'lion',
  etym: () => [_.oda, _.in],
})

_.see(_.yonin)
_.see(_.tajin)
_.see(_.yajin)

_.see(_.yin)
