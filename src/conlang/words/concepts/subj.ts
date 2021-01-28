import * as _ from '..'

export const subj = _.card('subj', {
  desc: () => `
# Subject and possessivity

The following morphemes express people (you, me, them), possessivity (my,
your, their) or verb conjugation depending on how the morpheme is
agglutinated (or not).

## Verbs

To transform a noun into a verb, the morpheme representing the subject is
prefixed on the noun as-is or with an /h/ to fix double vowels. Example:

* ${_.imilema}

Details on verbs here: ${_.verbs}.

## Possessivity

To mark possessivity, the morpheme is prefixed or suffixed to the noun and a
/t/ is added. Double consonant is fixed with an /a/. Examples:

* ${_.tima}
* ${_.mati}

The choice between prefix or suffix depends on context and what sounds best.
The difference is a bit like saying "your hand" or "hand of you". This lets
put emphasis where we want, like dropping the ${_.tim} of ${_.noatim} gently
after a small pause to express kindness or awe.

## Person

Depending on context we can chose between adding ${_.da} (self) suffix or
use the morpheme with /t/ prefix. Examples:

* ${_.phrase('I love you.', _.ozu, _.tim)}
* ${_.phrase('I love you.', _.ozu, _.idam)}
* The extra /m/ at the end is flavor marking (${_.am})

# The list !!

Here is the full list of subjects to express actions, possessivity and address.

### including me

* ${_.oS} (weˣ)
* ${_.okei} (weˣ.*Masters*)
* ${_.opi} (I)
* ${_.oyi} (I.*tiny*)
* ${_.olo} (I.*wet*)
* ${_.ode} (we.*us two*)
* ${_.sho} (we\\*)
* ${_.shokei} (we\\*.*Masters*)
* ${_.shoyi} (we\\*.*tiny*)
* ${_.sholo} (we\\*.*wet*)
* ${_.oka} (we.*all of us*)

(ˣ): special subject markers are explained here: ${_.aaa}

### including you

* ${_.iS} (you¹)
* ${_.ikei} (you¹.*Master*)
* ${_.iyi} (you¹.*tiny*)
* ${_.ilo} (you¹.*wet*)
* ${_.shiP} (you\\*)
* ${_.shikei} (you\\*.*Masters*.)
* ${_.shiyi} (you\\*.*tiny*)
* ${_.shilo} (you\\*.*wet*)

### the others

* ${_.aS} (theiy¹)
* ${_.akei} (theiy¹.*Masters*)
* ${_.ayi} (they¹.*tiny*)
* ${_.alo} (they¹.*wet*)
* ${_.ape} (theyˣ)
* ${_.shaP} (they\\*)
* ${_.shakei} (they\\*.*Masters*.)
* ${_.shayi} (they\\*.*tiny*)
* ${_.shalo} (they\\*.*wet*)

## Relative

* ${_.di} (who)
* ${_.dim} (whom)

## Possessivity suffix

${_.wu} is used as suffix to introduce a noun phrase clarifying possessivity.

* ${_.phrase('your hand', _.mati)}

or

* ${_.phrase('hand of you', _.mawu, _.iS)}

## Target prefix 

When specifying the target of an action, we use ${_.fu} (arrow) as prefix on
the subject. You can understand this prefix as something in the line of
"to/of". For linguists, this is the dative marker.

* ${_.phrase('Massage body of us.', _.mi, _.odatom)}
* ${_.phrase('Massage our body.', _.mi, _.tohodam)}
* ${_.phrase('Massage us.', _.mi, _.futom)}
* ${_.phrase('Our hand covers your skin.', _.toma, _.afe, _.noatim)}

Yes, in this language a subject can have both dative and accusative markers
as seen with ${_.futom} because the person is both the direct object of the
action (accusative) and the receiver or beneficiary of the action (dative).

The /m/ endings are the 'mood' markings (accusative). See ${_.am}.

## Subject suffix (ergative)

We usually omit the subject because it is visible on the verb but when we
want to use it, we use ${_.da} (self).

* ${_.phrase('They will talk to you.', _.ada, _.alapalir, _.futim)}

List of people:

* ${_.oda} (weˣ-people)
* ${_.ida} (you¹-person)
* ${_.ada} (they¹-person)
* ${_.pida} (I-person)
* ${_.keda} (Master-person)
* ${_.yida} (tiny-person)
* ${_.loda} (wet-person)
* ${_.peda} (someone)
* ${_.deda} (us-two)
* ${_.kada} (all of us)

## Genders

The genders are expressed with 'flavors' (what people call adjectives). These
are appended to the subject in place of ${_.da}. The important flavors are:

* ${_.iwi} (bird or non-binary)
* ${_.ana} (tree or female)
* ${_.oto} (wind or male)

* So an enby (they¹) is: ${_.ahiwi}
* So a female (you¹) is: ${_.ihana}
* A male group (we\\*) is: ${_.shohoto}

Note that we also have words to express gendered-bodies and these (like any noun) can be
used as subjects or "targets" in phrases.

* ${_.iwida} (enby-person)
* ${_.anada} (female-person)
* ${_.otoda} (male-person)

Your next read: ${_.evolution} (how things evolved)
`,
})
