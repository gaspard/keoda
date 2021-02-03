import * as _ from '.'

export const ri = _.word('ri', {
  adj: 'outer',
  pref: 'outer',
  suff: 'out of (ELAT)',
  glo: 'ELAT',
  see: () => [_.ro, _.prep],
})
_.see(_.ro)
_.see(_.riyin)
