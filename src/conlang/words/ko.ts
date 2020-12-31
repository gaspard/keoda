import * as _ from '.'

export const ko = _.word('ko', {
  prep: 'with',
  see: () => [_.prep],
})

export const koi = _.example([_.ko, _.i], 'avec toi = salutation')

export const koioda = _.example(
  [_.ko, _.i, _.oda],
  'avec ton corps = salutation'
)
