import * as _ from '.'

export const ul = _.word('ul', {
  prefix: 'until',
  see: () => [_.uya, _.prep],
  etym: () => [_.u, _.lei],
})
