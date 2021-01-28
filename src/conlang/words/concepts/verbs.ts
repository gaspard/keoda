import * as _ from '..'

export const verbs = _.card('verbs', {
  desc: () => `
# Action

All nouns can become actions (verbs) with an "activity" marker (${_.subj}).
Some nouns have a precise meaning when they take the "action" role such as
${_.fa}, ${_.fen}, ${_.awi}, ${_.yon}, etc.

Another particularity of this language is the use of three suffix used to
mark cases related to the body when derivating verbs:

* ${_.iC} (CARE, caring, gentle)
* ${_.oC} (ABL, pushing, away from)
* ${_.u} (ALL, pulling, towards)

### Examples:

* ${_.phrase('Caress wex my long hair.', _.mi, _.jihukin)}
* ${_.phrase('You breath (u) fresh air.', _.isheu, _.shehegim)}
* ${_.phrase('Yesterday, you threw (o) the ball.', _.irumolemi, _.tameh)}

#### nsfw

* ${_.phraseX('Pinch my nipple (lovingly).', _.mu, _.hamunam)}
* ${_.phraseX('Pinch my nipple (sadisticaly).', _.mu, _.hamunah)}
* ${_.phraseX('Whip my butt.', _.fo, _.palam)}

## The hardest case

The most complicated action type is the continuous passive in the past or
future. Here we go:

* ${_.ophrase('You were being caressed.', _.esilumilem)}

Decomposed in its parts, this is:

| ${_.es} | ${_.iC} | ${_.lu} | ${_.mi} | ${_.lem} |
| :-:     | :-:    | :-:     | :-:     |  :-:     |
| es | i | lu | mi | lem |
| passive | you    | continuous | caress | past |

Now that you know about the hardest, let's restart and move gently from one concept to the next.

## Imperative

The simplest tense is the imperative which looks like the infinitive.

* ${_.phrase('Kiss my cheek (face).', _.la, _.duham)}

## Word order

Phrases do not have precise verb, subject or object positioning. We use
marking on the target expressing some kind of bond with the subject (taste,
accusative) and sometimes receiver marking (dative) to remove ambiguity. See
${_.am} for details on "taste" marking.

* ${_.phrase('Touch wex lips.', _.ma, _.lan)}
* ${_.phrase('wex hand, kiss.', _.man, _.la)}
* ${_.phrase('Kiss wex lips (wholeheartedly).', _.la, _.lam)}
* ${_.phrase(
    'John gives the ball (he dislikes, accusative) to Jane (dative)',
    _.John,
    _.aguwu,
    _.tameh,
    _.niJane
  )}

For more information on word order: ${_.order}

## Transforming a noun into an action

To mark nouns as "active", making them something like verbs, we prefix them with
a subject marker (the "doer" or "receiver" when used with ${_.es}).

The origin of this is that saying "I hand" transforms "hand" into the "massage" or
"take" action and it evolved to be "Ihand" in a single word. Example:

* ${_.phrase('We mouth pull', _.sho, _.li, _.u)}
* ${_.phrase('We eat.', _.sholiu)}

The full list of "subject" prefix: ${_.subj}

## Passive voice

The passive voice transforms the target of the action into the subject. For
this we use ${_.es} prefix before the subject.

For example:

* ${_.phrase('I massage your foot.', _.omi, _.sametinam)} becomes ${_.phrase(
    'Your foot is massaged',
    _.sameti,
    _.esami
  )}, litteraly "foot.you be-him.**caress**".
* ${_.phrase('I will be massaged.', _.esomilir)} ("be-me.**caress**.will-be")

#### nsfw

* ${_.phrase('My pussy will be licked.', _.yonato, _.esakelilir)}

## Continuous aspect ${_.lu}

To denote an action that is happening for some time, we use ${_.lu} as prefix
on the action (comes after accord with the subject).

* ${_.phrase(
    'He was thinkink of you when he fell asleep.',
    _.alugahi,
    _.tim,
    _.dem,
    _.afodirulem
  )}
* ${_.phrase('Thinkink of you, he fell asleep.', _.lugahi, _.tim, _.afodirulem)}
* ${_.phrase('I am dreaming of you.', _.oluyafa, _.tim)}

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
  _.gamalan,
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

This translates in subjects ${_.okei}, ${_.iyi}, ${_.ilo}, etc.

${_.phrase('I am ready, Master.', _.yihe, _.sen, _.keda)}

${_.phrase('I (Master) will undress (tiny you).', _.okeinefelir, _.yida)}

${_.phrase('(tiny) me will undress you (Master).', _.piyinefelir, _.keda)}

Just remember, what sounds like "OKey" is in fact "I-fantastic" and
everything with a /y/ such as ${_.yida} are meant to be said with a soft and
very kind voice.

# Tenses

The tense is marked by a suffix related to time. There are a lot of them
because these timings are important in the erotic situations where this
language originated.

## Future tenses

* ${_.lire} (FUT.EVNT) eventual future
* ${_.liru} (FUT.DIST) distant future
* ${_.lira} (FUT.PROX) close future
* ${_.liri} (FUT.CRAS) tomorrow
* ${_.liro} (FUT.HOD) tonight or next morning

## Past tenses

* ${_.lemo} (PST.HOD) last night or this morning
* ${_.lemi} (PST.HEST) yesterday
* ${_.lemu} (PST.PROX) recent past
* ${_.lemu} (PST.DIST) distant past
* ${_.leme} (PST.EVNT) eventual past

## Eternal tenses

* ${_.lau} (DEF) always
* ${_.nei} (NEG) never

## Examples

* ${_.phrase('yesterday, I kissed a girl (I dislike).', _.olalemi, _.anah)}
* ${_.phrase('They might love you (completely) someday.', _.azulire, _.autim)}

#### nsfw

* ${_.phraseX('I am eating (lots of) pussy.', _.oluliu, _.yonam)}

Your next read: ${_.order} (word order)
`,
})
