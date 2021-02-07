import * as _ from '../lang'

export const ko = _.word('ko', {
  def: 'with',
  see: () => [_.prep],
})

export const koi = _.word('koi', {
  noun: 'salutation',
  etym: () => [_.ko, _.i],
})
