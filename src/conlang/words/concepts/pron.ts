import * as _ from '..'

export const pron = _.card('pronouns', {
  lang: 'All pronouns',
  desc: () => `
# Pronouns

## Relative pronouns

* ${_.di} (who)
* ${_.dim} (whom)

## Daytime pronouns

In case you haven't noticed, there is some consistency with ${_.verbs} and
${_.poss}.

Without gender

* ${_.oda} (I/we: 1SG.INDF = 1SI)
* ${_.ida} (you: 2SG)
* ${_.lada} (they: 3SG)
* ${_.shoda} (we: 1PL.PRS)
* ${_.shida} (you: 2PL.PRS)
* ${_.shada} (they: 3PL)

With gender

* ${_.idiwi} (you enby)
* ${_.idana} (you fem)
* ${_.idoto} (you masc)
* ${_.liwi} (they enby)
* ${_.lana} (she)
* ${_.loto} (he)

Rarer forms:

* ${_.odei} (me Master)
* ${_.keda} (you Master)
* ${_.piyida} (tiny me)
* ${_.yida} (tiny you)
* ${_.ayida} (tiny them)
* ${_.loda} (wet you)
* ${_.pida} (me: 1SG)
* ${_.deda} (us two)
* ${_.peda} (some: 3PL.INDF)
* ${_.kada} (all of us: 1PL.DEF)

## Dream / intimate body

These are used for affection and kindness because they respect people's
intimate dreams about themselves.

* ${_.oya} (me/us.INDF)
* ${_.iya} (you)
* ${_.laya} (you)
* ${_.shoya} (us)
* ${_.shiya} (you PL)
* ${_.shaya} (them PL)

Rarer forms:

* ${_.yadei} (me Master)
* ${_.keya} (you Master)
* ${_.piyiya} (tiny me)
* ${_.yiya} (tiny you)
* ${_.ayiya} (tiny them)
* ${_.loya} (wet you)
* ${_.piya} (me)
* ${_.deya} (us two)
* ${_.peya} (some)
* ${_.kaya} (all of us)

Your next read: ${_.nature} (nature)
`,
})
