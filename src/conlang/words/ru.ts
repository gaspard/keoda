import * as _ from '.'

export const ru = _.word('ru', {
  suffix: 'to become',
  verb: 'to become',
})

export const runa = _.word('runa', {
  noun: 'emergence',
  etym: () => [_.ru, _.na],
})
