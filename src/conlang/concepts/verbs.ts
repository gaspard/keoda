import * as _ from '../lang'

export const verbs = _.card('verbs', {
  open: true,
  desc: () => `
# Action

All nouns can become actions (verbs) with an "activity" marker (${_.subj}).
Some nouns have a precise meaning when they take the "action" role such as
${_.fa}, ${_.fen}, ${_.awi}, ${_.yin}, etc.

Another particularity of this language is the use of three suffix used to
mark intent or style:

* ${_.i$} (CARE, caring, gentle)
* ${_.o$} (PUSH, pushing, away from)
* ${_.u$} (PULL, pulling, towards)

### Examples:

* ${_.phrase('Caress (i) long hair.', _.mi.imp, _.ji.uki.n)}
* ${_.phrase('You breath (u) fresh air.', _.i.sheu, _.she.egi.m)}
* ${_.phrase('Yesterday, you threw (o) the ball.', _.i.rumo.emi, _.tame.h)}

#### nsfw

* ${_.phraseX('Pinch my nipple (lovingly).', _.mu.imp, _.hamun.m)}
* ${_.phraseX('Pinch my nipple (sadisticaly).', _.mu.imp, _.hamun.h)}
* ${_.phraseX(
    'Pinch my nipple (intensely and with love).',
    _.mu.do.imp,
    _.hamun.m
  )}
* ${_.phraseX('Pinch my nipple (gently with love).', _.mu.gi.imp, _.hamun.m)}
* ${_.phraseX('Whip my butt.', _.fo.imp, _.pal.m)}

## The hardest case

The most complicated action type is the continuous passive in the past or
future. Here we go:

* ${_.ophrase('You were being caressed.', _.es.i.lu.mi.em)}

Decomposed in its parts, this is:

| ${_.es} | ${_.i} | ${_.lu} | ${_.mi} | ${_.em} |
| :-:     | :-:    | :-:     | :-:     |  :-:     |
| es | i | lu | mi | lem |
| passive | you    | continuous | caress | past |

Now that you know about the hardest, let's restart and move gently from one concept to the next.

## Imperative

The simplest tense is the imperative which looks like the infinitive.

* ${_.phrase('Kiss my cheek (face).', _.la, _.duha.m)}

## Word order

Phrases do not have precise verb, subject or object positioning. We use
marking on the target expressing some kind of bond with the subject (taste,
accusative) and sometimes receiver marking (dative) to remove ambiguity. See
${_.m} for details on "taste" marking.

* ${_.phrase('Touch (our) lips.', _.ma, _.la.n)}
* ${_.phrase('(our) hand, kiss.', _.ma.n, _.la)}
* ${_.phrase('Kiss wex lips (wholeheartedly).', _.la, _.la.m)}
* ${_.phrase(
    'John gives the ball (he dislikes, accusative) to Jane (dative)',
    _.John,
    _.a.guwu,
    _.tame.h,
    _.ni.Jane
  )}

For more information on word order: ${_.order}

## Transforming a noun into an action

To mark nouns as "active", making them something like verbs, we prefix them with
a subject marker (the "doer" or "receiver" when used with ${_.es}).

The origin of this is that saying "I hand" transforms "hand" into the "massage" or
"take" action and it evolved to be "Ihand" in a single word. Example:

* ${_.phrase('We mouth pull', _.shoW, _.li, _.u$)}
* ${_.phrase('We eat.', _.sho.liu)}

The full list of "subject" prefix: ${_.subj}

## Passive voice

The passive voice transforms the target of the action into the subject. For
this we use ${_.es} prefix before the subject.

For example:

* ${_.phrase('I massage your foot.', _.o.mi, _.same.ti.m)} becomes ${_.phrase(
    'Your foot is massaged',
    _.same.ti,
    _.es.a.mi
  )}, litteraly "foot.you be-him.**caress**".
* ${_.phrase('I will be massaged.', _.es.o.mi.irP)} ("be-me.**caress**.will-be")

#### nsfw

* ${_.phrase('My pussy will be licked.', _.yin.to, _.es.a.keli.irP)}

## Continuous aspect ${_.lu}

To denote an action that is happening for some time, we use ${_.lu} as prefix
on the action (comes after accord with the subject).

* ${_.phrase(
    'He was thinkink of you when he fell asleep.',
    _.a.lu.gahi,
    _.ti.m,
    _.dem,
    _.a.fodiru.em
  )}
* ${_.phrase(
    'Thinking of you, he fell asleep.',
    _.lu.gahi,
    _.ti.m,
    _.a.fodiru.em
  )}
* ${_.phrase('I am dreaming of you.', _.o.lu.yafa, _.ti.m)}

#### nsfw

* ${_.phrase(
    'My pussy will be licked (continuously).',
    _.yin.to,
    _.es.a.lu.keli.ir
  )}

## Infinitive

The prefix ${_.u} marks the infinitive. The meaning is something like
'somebody does'. Note that because the infinitive behaves like a noun,
adjective or adverb it requires proper markings and accusative. The ${_.u}
prefix simply makes a noun, extra markers are required for other roles such
as adjective or adverb.

* ${_.phrase('They like to talk.', _.a.au, _.u.lapa.n)}
* ${_.phrase('I saw him coming.', _.o.fa.em, _.oto.n, _.le.u.lu.odu)}
* ${_.phrase('The person to love is me.', _.o.da, _.le.u.au, _.a.e, _.pi.m)}
* ${_.phrase('I want to see.', _.o.ora, _.u.fa.m)}

## Impersonal (weather verbs)

To express things without a subject, we use the passive voice accorded to third person singular:

* ${_.phrase('It rains', _.es.a.gai)}
* ${_.phrase('It rains (there is a rain)', _.es.a.e, _.gai)}
* ${_.phrase('It is raining', _.es.a.lu.gai)}

This is from [1401st Just Used 5 Minutes of Your Day](https://www.reddit.com/r/conlangs/comments/kzeek7/1401st_just_used_5_minutes_of_your_day/).

${_.phrase(
  'It turned out that the child was lying.',
  _.es.a.ru.em,
  _.gama.n,
  _.mei,
  _.joda,
  _.a.lu.dolo.em
)}

## Honorific / tiny

This idea of Honorific/tiny was inspired by BDSM power exchange and role play
but it transformed quite a lot to express something closer to the person
taking care (parent) and the innocent being taken care of (child). This is
also present in the BDSM Dom/sub relationship but I wanted something that
focussed more on expressing respect for the responsabilty of the "carer"
(${_.keda}) and the vulnerability of the "cared for" (${_.yi.da}).

#### nsfw

For more BDSM and sexual contexts, the Dominant is still referred to as
"fantastic" ${_.keda} but the sub is refered to as "wet" ${_.lo.da} instead of
"tiny" ${_.yi.da}.

This translates in subjects ${_.o.kei}, ${_.i.yi}, ${_.i.lo}, etc.

${_.phrase('I am ready, Master.', _.oyi.e, _.sen, _.keda)}

${_.phrase('I (Master) will undress (tiny you).', _.okei.nefe.irP, _.yi.da)}

${_.phrase('(tiny) me will undress you (Master).', _.oyi.nefe.irP, _.keda)}

Just remember, what sounds like "OKey" is in fact "I-fantastic" and
everything with a /y/ such as ${_.yi.da} are meant to be said with a soft and
very kind voice.

# Tenses

The tense is marked by a suffix related to time. There are a lot of them
because these timings are important in the erotic situations where this
language originated.

## Future tenses

* ${_.ir} (FUT) general future
* ${_.ire} (FUT.EVNT) eventual future
* ${_.iru} (FUT.DIST) distant future
* ${_.ira} (FUT.PROX) close future
* ${_.iri} (FUT.CRAS) tomorrow
* ${_.iro} (FUT.HOD) tonight or next morning

## Past tenses

* ${_.em} (FUT) general past
* ${_.emo} (PST.HOD) last night or this morning
* ${_.emi} (PST.HEST) yesterday
* ${_.emu} (PST.PROX) recent past
* ${_.emu} (PST.DIST) distant past
* ${_.eme} (PST.EVNT) eventual past

## Eternal tenses

* ${_.lau} (DEF) always
* ${_.nei} (NEG) never

## Examples

* ${_.phrase('yesterday, I kissed a girl (I dislike).', _.o.la.emi, _.ana.h)}
* ${_.phrase(
    'They might love you (completely) someday.',
    _.a.zu.ire,
    _.au.ti.m
  )}

#### nsfw

* ${_.phraseX('I am eating (lots of) pussy.', _.o.lu.liu, _.yin.m)}

Your next read: ${_.order} (word order)
`,
})
