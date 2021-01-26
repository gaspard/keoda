import * as _ from '..'

export const verbs = _.card('verbs', {
  writ: 'verbs',
  desc: () => `
# Verbs and conjugation

Many nouns are also verbs such as ${_.fa}, ${_.fen}, ${_.yin}, ${_.taj}.

One of the particularities of this language is the use of three suffix
used to mark cases related to the body when derivating verbs: 

* ${_.i} (CARE, caring, gentle)
* ${_.o} (ABL, pushing, away from)
* ${_.u} (ALL, pulling, towards)

Examples:

* ${_.phrase('Caress (i) my long hair.', _.mi, _.jihukin)}
* ${_.phrase('You breath (u) fresh air.', _.isheu, _.shehegim)}
* ${_.phrase('Yesterday, you threw (o) the ball.', _.irumolema, _.tamem)}

#### nsfw

* ${_.phraseX('Pinch my nipple.', _.mu, _.hamunam)}
* ${_.phraseX('Whip my butt.', _.fo, _.palam)}

## The hardest case

The most complicated conjugation is the continuous passive in the past or future. Here we go:

* ${_.ophrase('You were being caressed.', _.esilumilem)}

Decomposed in its parts, this is:

| ${_.es} | ${_.i} | ${_.lu} | ${_.mi} | ${_.lem} |
| :-:     | :-:    | :-:     | :-:     |  :-:     |
| es | i | lu | mi | lem |
| passive | you    | continuous | caress | past |

Now that you know about the hardest, let's restart and move gently from one concept to the next.

## Imperative

The simplest tense is the imperative which looks like the infinitive.

* ${_.phrase('Kiss my cheek (face).', _.la, _.duham)}

## Word order

Phrases do not have precise verb, subject or object positioning. We
use the accusative (target) and sometimes dative (receiver) to
remove ambiguity.

* ${_.phrase('Touch (my) lips.', _.ma, _.laham)}
* ${_.phrase('(My) hand, kiss.', _.maye, _.la)}
* ${_.phrase('Kiss (my) lips.', _.la, _.lam)}
* ${_.phrase(
    'John gives the ball (ACC) to Jane (DAT)',
    _.John,
    _.aguwu,
    _.tamem,
    _.niJane
  )}

Some verb-noun actions are so common that they fuse and "kiss my lips"
becomes "kiss-lips" as its own verb:

* ${_.phrase('Kiss-lips.', _.lala)}

For more information on word order: ${_.order}

## Accord with the subject

The accord with the subject comes *first*. This is because it is an
agglutination of *subject verb case* (separate words) to *subject.verb.case* (single word):

* ${_.phrase('We mouth pull', _.sho, _.li, _.u)}
* ${_.phrase('We eat.', _.sholiu)}

So the possible accords are:

* ${_.o} I/we (1SG.INDF = 1SI)
* ${_.i} you (2SG)
* ${_.a} they (3SG)
* ${_.sho} us present (1PL.PRS)
* ${_.shi} you present (2PL.PRS)
* ${_.sha} they (3PL)

**And the rarer forms**

* ${_.okei} I (1SG.HONOR)
* ${_.kei}  you (2SG.HONOR)
* ${_.akei} they (3SG.HONOR)
* ${_.piyi} I (1SG.DIM)
* ${_.yi} you (2SG.DIM)
* ${_.ayi} they (3SG.DIM)
* ${_.pi} I (1SG)
* ${_.de} us two (1PL.DU)
* ${_.pe} some (3PL.INDF)
* ${_.ka} us all (1PL.DEF)

We also have ${_.shoyi}, ${_.shokei}, etc. You get the idea.

In case you haven't noticed, there is some consistency with:

* ${_.pron} (pronouns)
* ${_.poss} (possessivity)

## Passive voices

The passive voice transforms the target of the action into the subject. For this we use ${
    _.es
  } prefix before conjugation.

For example:

* ${_.phrase('I massage your foot.', _.omi, _.sametinam)} becomes ${_.phrase(
    'Your foot is massaged',
    _.sameti,
    _.esami
  )}
* ${_.phrase('I will be massaged.', _.esomilir)}

#### nsfw

* ${_.phrase('My pussy will be licked.', _.yonato, _.esakelilir)}

## Continuous aspect ${_.lu}

To denote an action that is happening for some time, we use ${_.lu} as prefix
on the verb (comes after accord with the subject).

* ${_.phrase(
    'He was thinkink of you when he fell asleep.',
    _.alugahi,
    _.idam,
    _.dem,
    _.afodiru
  )}
* ${_.phrase('Thinkink of you, he fell asleep.', _.lugahi, _.idam, _.afodiru)}
* ${_.phrase('I am dreaming of you.', _.oluyafa, _.idam)}

#### nsfw

* ${_.phrase(
    'My pussy will be licked (continuously).',
    _.yonato,
    _.esalukelilir
  )}

## Impersonal (weather verbs)

To express things without a subject, we use the passive voice accorded to third person singular:

* ${_.phrase('It rains', _.esagai)}
* ${_.phrase('It rains (there is a rain)', _.esahe, _.gai)}
* ${_.phrase('It is raining', _.esalugai)}

This is from [1401st Just Used 5 Minutes of Your Day](https://www.reddit.com/r/conlangs/comments/kzeek7/1401st_just_used_5_minutes_of_your_day/).

${_.phrase(
  'It turned out that the child was lying.',
  _.esarulem,
  _.gamalam,
  _.mei,
  _.joda,
  _.ahelem,
  _.aludololem
)}

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
    _.yiyada
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

#### nsfw

* ${_.phraseX('I am eating pussy.', _.oluliu, _.yonam)}

Your next read: ${_.order} (word order)
`,
})
