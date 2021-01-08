import * as _ from '.'

export const ibu = _.word('ibu', {
  prep: 'for',
  adv: 'to',
  see: () => [_.prep],
})
