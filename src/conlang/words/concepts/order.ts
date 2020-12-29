import * as _ from '..'

export const order = _.card('order', {
  lang: 'Word order',
  desc: () => `
Word order does not matter in a phrase so that we can put emphasis and
expectation on any part of the phrase. For example, we can say:

(You need to say these out loud, emphasis on "DOM"...)
${_.phrase('Intensely, we will whip...your ass', _.dom, _.ofolir, _.pal)}

Or

(Again, emphasis on "... DOM !")
${_.phrase('Your ass... we will whip... intensely !', _.pal, _.ofolir, _.dom)}

Or even
${_.phrase(
  'Intensely !... you will be whipped... later today.',
  _.dom,
  _.zifo,
  _.pal,
  _.eliri
)}
`,
})
