import * as _ from '.'

export const ni = _.word('ni', {
  prep: 'to',
  pref: 'to (DAT)',
  glo: 'DAT',
  see: () => [_.prep, _.order],
})
