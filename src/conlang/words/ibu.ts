import * as _ from '.'

export const ibu = _.word('ibu', {
  def: 'for',
  mod: 'to',
  see: () => [_.prep],
})
