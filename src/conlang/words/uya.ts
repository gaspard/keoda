import * as _ from '.'

export const uya = _.word('uya', {
  prep: 'since',
  see: () => [_.prep],
  etym: () => [_.u, _.ya],
})
