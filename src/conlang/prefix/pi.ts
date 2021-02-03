import { verb } from '../mprefix'
import * as _ from '../words'

export const pi = verb('pi', {
  noun: 'me',
  glo: 'I',
  adj: 'origin',
  desc: () => `
${_.pi} is the opposite of ${_.pa}... and it is the same.

It means 'one', 'here' whereas ${_.pa} means 'every', 'all around'.
`,
  see: () => [_.pa],
})
