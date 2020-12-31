import * as _ from '.'

export const dir = _.word('dir', {
  prep: 'when (future)',
  glo: 'when.FUT',
  etym: () => [_.da, _.lir],
  see: () => [_.elir, _.dem, _.prep],
})
