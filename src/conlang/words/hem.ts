import * as _ from '.'

export const hem = _.word('hem', {
  adj: 'offered',
  suffix: 'offered',
  desc: () => `
Important compliment which means "I see what you are offering to me".

For example: ${_.phrase('Offered body.', _.odahem)}
`,
})
