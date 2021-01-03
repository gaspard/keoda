import * as _ from '..'

export const verbs = _.card('verbs', {
  lang: 'verbs and conjugation',
  desc: () => `
Many nouns are also verbs such as ${_.fa} or ${_.fen}.

This language was born from an imaginary place where love making is one of the most important activity of adults and this results in a rich vocabulary to talk about caressing, slapping, pinching and playing with body parts.

# ${_.i}, ${_.u}, ${_.o} suffix

These alter the verbs respectively to mean "caressing" or gentle, "pinching" and slapping or hurting.

* ${_.phrase('caress my back', _.mi, _.nopi)}
* ${_.phrase('pinch my nipple', _.mu, _.hamun)}
* ${_.phrase('hit my buttock', _.mo, _.pal)}

The very first use of the language was to ask a sexual partner to do something so the imperative form is the simplest and looks like the infinitiv.

Phrase do not have precise verb, subject or object positioning. We
use the accusative (target) and sometimes dative (receiver) to
remove ambiguity.

* ${_.phrase('Kiss hand !', _.la, _.maham)}
* ${_.phrase('Lips touch !', _.laham, _.ma)}
* ${_.phrase('Kiss me !', _.la, _.la)}

Since the last example is not ambiguous, case ${_.am} is not required.

It really depends where we want to put the emphasis (on the kissing or on who
is to be kissed).

See ${_.order} for more...

# Conjugation

For other tenses apart from imperative, the conjugation *comes first*. This is because it is an evolution
from *subject verb* to *subjectverb*:

* ${_.phrase('we pull mouth', _.sho, _.li, _.u)}
* evolved into ${_.phrase('we eat', _.sholiu)}

So the possible conjugations are the same as the possible subjects:

* ${_.o} I/we (1SG.INDF)
* ${_.i} you (2SG)
* ${_.a} they (3SG)
* ${_.sho} us present (1PL.PRS)
* ${_.shi} you present (2PL.PRS)
* ${_.sha} they (3PL)

## And the rarer forms

* ${_.okei} I (1SG.HONOR)
* ${_.kei}  you (2SG.HONOR)
* ${_.akei} they (3SG.HONOR)
* ${_.piyi} I (1SG.TINY)
* ${_.yi} you (2SG.TINY)
* ${_.ayi} they (3SG.TINY)
* ${_.pi} I (1SG)
* ${_.de} us two (1PL.DU)
* ${_.pe} some (3PL.INDF)
* ${_.ka} us all (1PL.DEF)

We also have ${_.shoyi}, ${_.shokei}, etc. You get the idea.

In case you haven't noticed, there is some consistency with ${_.pron} and
${_.poss}.

## Passive voices

To express passive phrases, we simply use accusative case ${_.am} suffix and
the infinitive verb:

${_.phrase('I will be whipped.', _.odam, _.folir)}

But we can also conjugate the verb:

${_.phrase('I will be whipped by some people.', _.odam, _.pefolir)}

## Honorific / tiny

This is important. In many role play it is great to have Dom/sub
relationships, one that is in control and another who is passive. In order to
emphasise this setting, the Dominant is referred to as "fantastic" ${_.kei}
and the sub as "tiny" ${_.yi} or "wet" ${_.lo}.

This translates in possesive suffix ${_.tei}, ${_.toyi}, ${
    _.tolo
  } or conjugations
using ${_.kei} or the affix ${_.ei} or ${_.yi}.

${_.phrase('I am ready, Master.', _.yihe, _.sen, _.keda)}

${_.phrase('I (Master) will undress (tiny you).', _.okeinefelir, _.yida)}

${_.phrase('(tiny) me will undress you (Master).', _.piyinefelir, _.keda)}

Just remember, what sounds like "OKey" is in fact "I-fantastic" and everything hard to
pronounce such as ${
    _.yiya
  } are meant to be said with a soft and very kind voice.

# Tenses

The tense is marked by a suffix related to time. There are a lot of them
because these timings are important in the erotic situations where this
language originated.

## Future tenses

* ${_.lire} (FUT.EVNT) eventual future
* ${_.liro} (FUT.DIST) distant future
* ${_.liru} (FUT.PROX) close future
* ${_.lira} (FUT.CRAS) tomorrow
* ${_.liri} (FUT.HOD) tonight or next morning

## Past tenses

* ${_.lemi} (PST.HOD) last night or this morning
* ${_.lema} (PST.HEST) yesterday
* ${_.lemu} (PST.PROX) recent past
* ${_.lemo} (PST.DIST) distant past
* ${_.leme} (PST.EVNT) eventual past

## Eternal tenses

* ${_.lau} (DEF) always
* ${_.nei} (NEG) never

# Examples

* ${_.phrase('yesterday, I kissed a girl.', _.olalema, _.anam)}
* ${_.phrase('They might love you someday.', _.azulire, _.autim)}

You might want to read ${_.order} next.
`,
})
