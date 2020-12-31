import * as _ from '.'

export const ten = _.word('ten', {
  pron: 'the',
  desc: () => `Optional. Used to put emphasis on the noun.`,
  see: () => [_.tu],
})
