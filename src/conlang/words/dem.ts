import * as _ from '.'

export const dem = _.word('dem', {
  def: 'when past',
  glo: 'when.PST',
  etym: () => [_.da, _.em],
  see: () => [_.elem, _.dir, _.prep],
  desc: () => `The place lived`,
})
