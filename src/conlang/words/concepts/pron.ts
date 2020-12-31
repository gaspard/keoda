import * as _ from '..'

export const pron = _.card('pronouns', {
  lang: 'All pronouns',
  desc: () => `
## Daytime pronouns

In case you haven't noticed, there is some consistency with ${_.verbs} and
${_.poss}.

* ${_.oda} (me/us)
* ${_.ida} (you SG)
* ${_.ada} (them SG)
* ${_.shoda} (us)
* ${_.shida} (you PL)
* ${_.shada} (them PL)

Rarer forms:

* ${_.odei} (me Master)
* ${_.keda} (you Master)
* ${_.piyida} (tiny me)
* ${_.yida} (tiny you)
* ${_.ayida} (tiny them)
* ${_.loda} (wet you)
* ${_.pida} (me)
* ${_.deda} (us two)
* ${_.peda} (some)
* ${_.kada} (all of us)

## Dream / intimate body

These are used for affection and kindness because they respect people's
intimate dreams about themselves.

* ${_.oya} (me/us.INDF)
* ${_.iya} (you)
* ${_.aya} (you)
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

`,
})
