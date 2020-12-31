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

Phrase do not have precise verb, subject or object positioning and conjugation is used to remove ambiguity.

If the first noun does not match conjugation, this means that it represents the adverb (receiver of an action):

* ${_.phrase('them, kiss', _.ada, _.la)}
* which is a short form of ${_.phrase('to person kiss', _.a, _.oda, _.la)}
* and we can also say ${_.phrase('kiss them', _.la, _.ada)}

It really depends where we want to put the emphasis (on the kissing or on who is to be kissed).

# Conjugation

For other tenses apart from imperative, the conjugation *comes first*. This is because it is an evolution
from *subject verb* to *subjectverb*:

* ${_.phrase('we pull mouth', _.sho, _.li, _.u)}
* evolved into ${_.phrase('we eat', _.sholiu)}

So the possible conjugations are the same as the possible subjects:

* ${_.o} *I/we* (1SG.INDF)
* ${_.i} *you* (2SG)
* ${_.a} *them* (3SG)
* ${_.sho} *us* (present) (1PL.PRS)
* ${_.shi} *you* (present) (2PL.PRS)
* ${_.sha} *them* (3PL)

## And the rarer forms

* ${_.okei} *I honorific* (1SG.HONOR)
* ${_.kei} *honorific* (2SG.HONOR)
* ${_.akei} *they honorific* (3SG.HONOR)
* ${_.piyi} *me depraved* (1SG.DPRV)
* ${_.yi} *you depraved* (2SG.DPRV)
* ${_.pi} *I* (1SG)
* ${_.de} *us two* (1PL.DU)
* ${_.pe} *some* (3PL.INDF)
* ${_.ka} *us all* (1PL.DEF)

## Passive voices

To express passive phrases, we simply use dative case ${_.am} suffix and
the infinitive verb:

${_.phrase('I will be whipped.', _.onam, _.folir)}

But we can also conjugate the verb:

${_.phrase('I will be whipped by some people.', _.onam, _.pefolir)}

## Honorific / depraved

This is super important and super important and super important. In many role
play it is great to have Dom/sub relationships, one that is in control and
another who is passive. In order to emphasise this setting, the Dominant is
referred to as "fantastic" ${_.kei} and the sub as "tiny" ${_.yi} or "wet" ${
    _.lo
  }.

This translates in possesive suffix ${_.tei}, ${_.tiyi}, ${
    _.tilo
  } or conjugations using ${_.kei} or the affix ${_.ei} or ${_.yi}.

${_.phrase('I am ready, Master.', _.yihe, _.sen, _.keda)}

${_.phrase('I (Master) will undress (you).', _.okeinefelir, _.yida)}

${_.phrase('I (tiny) will undress you (Master).', _.oyinefelir, _.keda)}

Just remember, what sounds like "OK" is in fact "I-fantastic".

# Tenses

The tense is marked by a suffix related to time. There are a lot of them
because these timings are so important in the erotic situations where this
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

* ${_.lei} (DEF) always
* ${_.nei} (NEG) never

# Examples

* ${_.phrase('yesterday, I kissed a girl.', _.olalema, _.ana)}
* ${_.phrase('They might love you someday.', _.azulire, _.auti)}

You might want to read ${_.order} next.
`,
})
