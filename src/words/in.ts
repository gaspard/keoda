import * as _ from '.'

const _in = _.word('in', {
  adj: 'chaud',
})
export { _in as in }

export const odin = _.word('odin', {
  noun: 'lion.ne',
  derived: [_.oda, _.in],
})

_.see(_.yonin)
_.see(_.tajin)
_.see(_.yajin)

_.see(_.yin)
