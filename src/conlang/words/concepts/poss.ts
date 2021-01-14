import * as _ from '..'

export const poss = _.card('poss', {
  writ: 'poss',
  desc: () => `
# Possessivity

Here are the different affix to express possessivity. They can all be
used as prefix or suffix depending on context and what sounds best.

The difference is a bit like saying "your hand" or "hand of you". This lets
put emphasis where we want, like dropping the ${_.ti} of ${_.noati} gently
after a small pausee to express kindness or awe.

In case you haven't noticed, there is some consistency with ${_.pron} and
${_.verbs}.

* ${_.to} (my/our)
* ${_.ti} (your SG)
* ${_.ta} (their SG)
* ${_.tosho} (our)
* ${_.toshi} (your PL)
* ${_.tosha} (their PL)

Rarer forms:

* ${_.tei} (my as Master)
* ${_.toke} (your as Master)
* ${_.topiyi} (my as tiny)
* ${_.toyi} (your as tiny)
* ${_.tayi} (their as tiny)
* ${_.tolo} (your as wet)
* ${_.topi} (my)
* ${_.tode} (our two)
* ${_.tope} (to some)
* ${_.toka} (to all of us)

And this one requires a complement and is only used as suffix:

* ${_.wu}

And don't forget to use ${_.am} on the last part of the receiver of the
action.

${_.phrase('Body of me is caressed.', _.odatoham, _.mi)}

Could also be:

${_.phrase('My body is caressed.', _.tohodam, _.mi)}

${_.phrase('My/our hand covers your skin.', _.toma, _.afe, _.noati)}
`,
})
