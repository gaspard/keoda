import * as _ from '.'

export const ibu = _.word('ibu', {
  prep: 'for',
  see: () => [_.prep],
})
