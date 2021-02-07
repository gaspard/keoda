import * as _ from '../lang'

export const niW = _.word('ni', {
  def: 'to',
  pref: 'to (DAT)',
  glo: 'DAT',
  see: () => [_.prep, _.order],
})
