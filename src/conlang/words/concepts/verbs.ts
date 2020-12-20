import * as _ from '..'

export const verbs = _.card('verbs', {
  lang: 'verbs and conjugation',
  desc: () => `
Many nouns are also verbs such as ${_.fa} or ${_.fen}.

This language was born from an imaginary place where love making is one of the most important activity of adults and this results in a rich vocabulary to talk about caressing, slapping, pinching and playing with body parts.

## ${_.i}, ${_.u}, ${_.o} suffix

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

## Conjugation

For other tenses apart from imperative, the conjugation *comes first*. This is because it is an evolution
from *subject verb* to *subjectverb*:

* ${_.phrase('we pull mouth', _.sho, _.li, _.u)}
* evolved into ${_.phrase('we eat', _.sholiu)}

So the possible conjugations are the same as the possible subjects:

* *I/we*: ${_.o} (1SG.INDF), subject: ${_.oda}
* *you*: ${_.i} (2SG), subject: ${_.ida}
* *them*: ${_.a} (3SG), subject: ${_.ada}
* *us* (present): ${_.sho} (1PL.PRS), subject: ${_.shoda}
* *you* (present): ${_.shi} (2PL.PRS), subject: ${_.shida}
* *them*: ${_.sha} (3PL)

### And the rarer forms

* *you honorific*: ${_.kei} (2SG.HONOR), subject: ${_.keda}
* *you depraved*: ${_.yi} (2SG.DPRV), subject: ${_.yida}
* *I*: ${_.pi} (1SG), subject: ${_.pida}
* *us two*: ${_.de} (1PL.DU), subject: ${_.deda}
* *some*: ${_.pe} (3SG.INDF), subject: ${_.peda}
* *us all*: ${_.ka} (1PL.DEF), subject: ${_.kada}

## Tenses

The tense is marked by a suffix related to time. There are a lot of them because these
timings are so important in the erotic situations where this language originated.

* ${_.lire} (FUT.EVNT) eventual future
* ${_.liro} (FUT.DIST) distant future
* ${_.liru} (FUT.PROX) close future
* ${_.lira} (FUT.CRAS) tomorrow
* ${_.liri} (FUT.HOD) tonight or next morning

* ${_.lemi} (PST.HOD) last night or this morning
* ${_.lema} (PST.HEST) yesterday
* ${_.lemu} (PST.PROX) recent past
* ${_.lemo} (PST.DIST) distant past
* ${_.leme} (PST.EVNT) eventual past

* ${_.lei} (DEF) always
* ${_.nei} (NEG) never

# Examples

* ${_.phrase('yesterday, I kissed a girl.', _.olalema, _.ana)}
* ${_.phrase('They might love you someday.', _.azulire, _.auti)}
`,
})
