import * as _ from '.'

// FIXME: REPLACE, too close then 'the'.
// ALSO FIX 'tu'...
export const ten = _.word('ten', {
  noun: 'this',
  desc: () => `Optional. Used to put emphasis on the noun.`,
  see: () => [_.tu],
})
