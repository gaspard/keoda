import * as _ from '../words'

export const subj = _.card('subj', {
  desc: () => `
# Subject and possessivity

The following morphemes express people (you, me, them), possessivity (my,
your, their) or verb conjugation depending on how the morpheme is
agglutinated (or not).

## Verbs

To transform a noun into a verb, the morpheme representing the subject is
prefixed on the noun as-is or with an /h/ to fix double vowels. Example:

* ${_.i.mi.ema}

Details on verbs here: ${_.verbs}.

## Possessivity

To mark possessivity, the morpheme is prefixed or suffixed to the noun and a
/t/ is added. Double consonant is fixed with an /a/. Examples:

* ${_.ti.ma}
* ${_.ma.ti}

The choice between prefix or suffix depends on context and what sounds best.
The difference is a bit like saying "your hand" or "hand of you". This lets
put emphasis where we want, like dropping the ${_.ti.m} of ${_.noa.ti.m} gently
after a small pause to express kindness or awe.

## Person

Depending on context we can chose between adding ${_.da} (self) suffix or
use the morpheme with /t/ prefix on singular (as-is for plural). Examples:

* ${_.phrase('I love you.', _.o.zu, _.ti.m)}
* ${_.phrase('I love you.', _.o.zu, _.i.da.m)}
* ${_.phrase('I love them.', _.o.zu, _.sha.$.m)}

The extra /m/ at the end is flavor marking (${_.m}).

# The list !!

Here is the full list of subjects to express actions, possessivity and address.

### including me

* ${_.o} (weˣ)
* ${_.okei} (weˣ.*Masters*)
* ${_.opi} (I)
* ${_.oyi} (I.*tiny*)
* ${_.olo} (I.*wet*)
* ${_.ode} (we.*us two*)
* ${_.shoW} (we\\*)
* ${_.sho.kei} (we\\*.*Masters*)
* ${_.sho.yi} (we\\*.*tiny*)
* ${_.sho.lo} (we\\*.*wet*)
* ${_.oka} (we.*all of us*)

(ˣ): special subject markers are explained here: ${_.aaa}

### including you

* ${_.i$} (you¹)
* ${_.i.kei} (you¹.*Master*)
* ${_.i.yi} (you¹.*tiny*)
* ${_.ilo} (you¹.*wet*)
* ${_.shi} (you\\*)
* ${_.shi.kei} (you\\*.*Masters*.)
* ${_.shi.yi} (you\\*.*tiny*)
* ${_.shi.lo} (you\\*.*wet*)

### the others

* ${_.a} (theiy¹)
* ${_.a.kei} (theiy¹.*Masters*)
* ${_.a.yi} (they¹.*tiny*)
* ${_.a.lo} (they¹.*wet*)
* ${_.ape} (theyˣ)
* ${_.sha} (they\\*)
* ${_.sha.kei} (they\\*.*Masters*.)
* ${_.sha.yi} (they\\*.*tiny*)
* ${_.sha.lo} (they\\*.*wet*)

## Relative

* ${_.di} (who)
* ${_.dim} (whom)

## Possessivity suffix

${_.wu} is used as suffix to introduce a noun phrase clarifying possessivity.

* ${_.phrase('your hand', _.ma.ti)}

or

* ${_.phrase('hand of you', _.ma.wu, _.i)}

## Target prefix 

When specifying the target of an action, we use ${_.fu} (arrow) as prefix on
the subject. You can understand this prefix as something in the line of
"to/of". For linguists, this is the dative marker.

* ${_.phrase('Massage body of us.', _.mi, _.oda.to.m)}
* ${_.phrase('Massage our body.', _.mi, _.to.oda.m)}
* ${_.phrase('Massage us.', _.mi, _.fu.to.m)}
* ${_.phrase('Our hand covers your skin.', _.to.ma, _.a.fe, _.noa.ti.m)}

Yes, in this language a subject can have both dative and accusative markers
as seen with ${_.fu.to.m} because the person is both the direct object of the
action (accusative) and the receiver or beneficiary of the action (dative).

The /m/ endings are the 'mood' markings (accusative). See ${_.m}.

## Subject suffix (ergative)

We usually omit the subject because it is visible on the verb but when we
want to use it, we use ${_.da} (self).

* ${_.phrase('They will talk to you.', _.a.da, _.a.lapa.ir, _.ti.m)}

List of people:

* ${_.o.da} (weˣ-people)
* ${_.i.da} (you¹-person)
* ${_.a.da} (they¹-person)
* ${_.pi.da} (I-person)
* ${_.kei.da} (Master-person)
* ${_.yi.da} (tiny-person)
* ${_.lo.da} (wet-person)
* ${_.pe.da} (someone)
* ${_.de2.da} (us-two)
* ${_.ka.da} (all of us)

## Genders

To express gender, we use the possessive 'your', 'their', etc and the noun that
most closely expresses the desired notion. Note that the verb is accorded to the
possessive argument. Here are some examples:

* ${_.phrase('You-enby walk.', _.ti.iwi, _.i.lipa)}
* ${_.phrase('She sings.', _.ta.ana, _.a.lipa)}
* ${_.phrase('They-men talk.', _.tasha.oto, _.sho.lapa)}
* ${_.phrase('She loves me.', _.ta.ana, _.a.zu, _.pi.m)}

Note that we also have words to express gendered-bodies and these (like any
noun) can be used as subjects or "targets" in phrases but they then accord as
an indefinite 'person' as if we would say 'someone', 'some girl', etc.

* ${_.iwi.da} (enby-person)
* ${_.ana.da} (female-person)
* ${_.oto.da} (male-person)

Your next read: ${_.evolution} (how things evolved)
`,
})
