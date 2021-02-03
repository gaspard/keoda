import * as _ from '.'

export const ibu = _.word('ibu', {
  def: 'for',
  adj: 'to',
  see: () => [_.prep],
})
