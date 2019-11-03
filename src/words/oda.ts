import * as _ from '.'

export const yoda = _.word('yoda', { noun: 'corps avec une vulve' })

export const oda = _.word('oda', {
  noun: 'corps, lieu vivant',
  suffix: 'animal comme, qui a',
  desc: () => `De là vient ${_.keoda} (**la langue cachée du corps**).`,
})

export const keoda = _.word('keoda', {
  noun: 'lieu de vie cachée, langue cachée du corps',
})
