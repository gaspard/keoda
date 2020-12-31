import * as _ from '..'

export const poss = _.card('det', {
  lang: 'Possessive',
  desc: () => `
Here are the different affix to express possessivity. They can all be
used as prefix or suffix depending on context and what sounds best.

The difference is a bit like saying "your hand" or "hand of you". This lets
put emphasis where we want, like dropping the ${_.ti} of ${_.noati} gently
after a small pausee to express kindness or awe.

In case you haven't noticed, there is some consistency with ${_.pron} and
${_.verbs}.

* ${_.to} (to me/us)
* ${_.ti} (to you SG)
* ${_.ta} (to them SG)
* ${_.tosho} (to us)
* ${_.toshi} (to you PL)
* ${_.tosha} (to them PL)

Rarer forms:

* ${_.tei} (to me Master)
* ${_.toke} (to you Master)
* ${_.topiyi} (to tiny me)
* ${_.toyi} (to tiny you)
* ${_.tayi} (to tiny them)
* ${_.tolo} (to wet you)
* ${_.topi} (to me)
* ${_.tode} (to us two)
* ${_.tope} (to some)
* ${_.toka} (to all of us)

And this one requires a complement and is only used as suffix:

* ${_.wu}

And don't forget to use ${_.am} on the last part of the receiver of the
action.

${_.phrase('Body of me is caressed.', _.odatoam, _.mi)}

Could also be:

${_.phrase('My body is caressed.', _.tohodam, _.mi)}

${_.phrase('My/our hand covers your skin.', _.toma, _.afe, _.noati)}
`,
})
