import * as _ from '..'

export const verbs = _.card('verbs', {
  desc: () => `
# Verbs and conjugation

Many nouns are also verbs such as ${_.fa}, ${_.fen}, ${_.yin}, ${_.taj}.

One of the particularities of this language is the use of three suffix
used to mark cases related to the body: 

* ${_.i} (CARE)
* ${_.u} (ABL)
* ${_.o} (ALL)

These alter the verbs respectively to mean "caring" or gentle, "pulling" and "pushing" or intensity.

* ${_.phrase('Caress (i) my long hair.', _.mi, _.jihukiam)}
* ${_.phrase('You breath (u) fresh air.', _.isheu, _.shehegiam)}
* ${_.phrase('Yesterdan, you threw (o) the ball.', _.irumolema, _.tameham)}

#### nsfw

* ${_.phrase('Pinch my nipple.', _.mu, _.hamunam)}
* ${_.phrase('Whip my butt.', _.fo, _.palam)}

The simplest tense is the imperative which looks like the infinitive.

* ${_.phrase('Kiss my cheek (face).', _.la, _.duham)}

Phrases do not have precise verb, subject or object positioning. We
use the accusative (target) and sometimes dative (receiver) to
remove ambiguity.

* ${_.phrase('Touch my lips.', _.ma, _.laham)}
* ${_.phrase('My hand, kiss.', _.maham, _.la)}
* ${_.phrase('Kiss me.', _.la, _.lam)}

Some verbs-noun actions are so common that they fuse and "kiss my lips"
becomes "kiss-lips" as its own verb:

* ${_.phrase('Kiss-lips.', _.lala)}

For more information on word order: ${_.order}

# Conjugation

For other tenses, the conjugation comes *first*. This is because it is an
evolution from *subject verb case* to *subject.verb.case*:

* ${_.phrase('We mouth pull', _.sho, _.li, _.u)}
* ${_.phrase('We eat.', _.sholiu)}

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

In case you haven't noticed, there is some consistency with:

* ${_.pron} (pronouns)
* ${_.poss} (possessivity)

## Passive voices

To express passive voice, we have the intransitive case ${_.es} prefix:

* ${_.phrase('I will be massaged.', _.ohesmalir)}

#### nsfw

* ${_.phrase('The pussy, I will be licked.', _.yonam, _.oheskelilir)}

## Honorific / tiny

This idea of Honorific/tiny was inspired by BDSM power exchange and role play
but it transformed quite a lot to express something closer to the person
taking care (parent) and the innocent being taken care of (child). This is
also present in the BDSM Dom/sub relationship but I wanted something that
focussed more on expressing respect for the responsabilty of the "carer"
(${_.keda}) and the vulnerability of the "cared for" (${_.yida}).

#### nsfw

For more BDSM and sexual contexts, the Dominant is still referred to as
"fantastic" ${_.keda} but the sub is refered to as "wet" ${_.loda} instead of
"tiny" ${_.yida}.

You can look at ${_.pron}

This translates in possesive suffix ${_.tei}, ${_.toyi}, ${_.tolo} or
conjugations using ${_.kei} or the affix ${_.ei} or ${_.yi}.

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

Your next read: ${_.order} (word order)
`,
})
