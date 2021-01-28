import * as _ from '.'

export const sho = _.word('sho', {
  def: '**we\\***',
  prefix: '**our\\***',
  suffix: '**our\\***',
  see: () => [_.subj],
})
