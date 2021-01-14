import * as _ from '.'

export const shu = _.word('shu', {
  prep: 'and',
  see: () => [_.prep],
})

export const shuhe = _.word('shuhe', {
  prep: 'but',
  etym: () => [_.shu, _.ne],
  see: () => [_.prep],
})
