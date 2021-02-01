import * as _ from '.'

export const ibu = _.word('ibu', {
  def: 'for',
  adv: 'to',
  see: () => [_.prep],
})
