import * as _ from '.'

export const ibu = _.word('ibu', {
  prep: 'for',
  style: 'to',
  see: () => [_.prep],
})
