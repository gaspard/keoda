import * as _ from '.'

export const ko = _.word('ko', {
  prep: 'with',
  see: () => [_.prep],
})

export const koi = _.example([_.ko, _.iC], 'avec toi = salutation')

export const koioda = _.example(
  [_.ko, _.iC, _.oda],
  'avec ton corps = salutation'
)
