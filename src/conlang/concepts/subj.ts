import * as _ from '../lang'

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
* ${_.phrase('I love them.', _.o.zu, _.sha.m)}

The extra /m/ at the end is flavor marking (${_.m}).

# The list !!

Here is the full list of subjects to express actions, possessivity and address.

### indefinite

This subject is the most used to talk about oneself and it means "we" in the
indefinite sense. It is part royal and part modesty.

* ${_.linkAndGlo(_.o)}
* ${_.linkAndGlo(_.o.kei)}

### every

* ${_.linkAndGlo(_.o.ka)}

### me

* ${_.linkAndGlo(_.o.pi)}
* ${_.linkAndGlo(_.o.yi)}
* ${_.linkAndGlo(_.o.lo)}

### you and me

* ${_.linkAndGlo(_.o.de)}

### us

* ${_.linkAndGlo(_.sho)}
* ${_.linkAndGlo(_.sho.kei)}
* ${_.linkAndGlo(_.sho.yi)}
* ${_.linkAndGlo(_.sho.lo)}

### you (just you, singular)

* ${_.linkAndGlo(_.i)}
* ${_.linkAndGlo(_.i.kei)}
* ${_.linkAndGlo(_.i.yi)}
* ${_.linkAndGlo(_.i.lo)}

### you (plural)

* ${_.linkAndGlo(_.shi)}
* ${_.linkAndGlo(_.shi.kei)}
* ${_.linkAndGlo(_.shi.yi)}
* ${_.linkAndGlo(_.shi.lo)}

### them (singular)

* ${_.linkAndGlo(_.a)}
* ${_.linkAndGlo(_.a.kei)}
* ${_.linkAndGlo(_.a.yi)}
* ${_.linkAndGlo(_.a.lo)}

### some of them

* ${_.linkAndGlo(_.a.pe)}

### them (plural)

* ${_.linkAndGlo(_.sha)}
* ${_.linkAndGlo(_.sha.kei)}
* ${_.linkAndGlo(_.sha.yi)}
* ${_.linkAndGlo(_.sha.lo)}

## Relative

* ${_.le} who (noun modifier)

## TODO: REWRITE END OF THIS CARD...

##### note

If you read this, I screwed up and haven't fixed the text before publishing. Bad.

## Possessivity suffix

${_.wu} is used as suffix to introduce a noun phrase clarifying possessivity.

* ${_.phrase('your hand', _.ma.ti)}

or

* ${_.phrase('hand of you', _.ma.wu, _.ti)}
* ${_.phrase('Our hand covers your skin.', _.to.ma, _.a.fe, _.noa.ti.m)}

The \`/m/\` endings are the 'mood' markings (accusative). See ${_.taste}.

## Target person (dative)

When specifying the recipient of an action, we use ${_.ni} (arrow) as prefix
on the subject. You can understand this prefix as something in the line of
"to/of".

* ${_.phrase('Massage us.', _.mi.imp, _.ni.to)}
* ${_.phrase('Massage them.', _.mi.imp, _.ni.ta)}

There are other prefix that can be used such as ${_.fe} (on), ${_.ro} (in)
and so on: ${_.prep}.

## Subject suffix (ergative)

We usually omit the subject because it is visible on the verb but when we
want to use it, we use ${_.da} (self).

* ${_.phrase('They will talk to you.', _.a.da, _.a.lapa.ir, _.ni.ti)}

List of people:

* ${_.o.da} (people)
* ${_.i.da} (you-person)
* ${_.a.da} (they-person)
* ${_.pi.da} (I-person)
* ${_.kei.da} (Master-person)
* ${_.yi.da} (tiny-person)
* ${_.lo.da} (wet-person)
* ${_.pe.da} (someone)
* ${_.de.da} (us-two)
* ${_.ka.da} (all of us)

## Genders

To express gender, we use the possessive 'your', 'their', etc and the noun that
most closely expresses the desired notion. Note that the verb is accorded to the
possessive argument. Here are some examples:

* ${_.phrase('You-enby walk.', _.ti.iwi, _.i.lipa)}
* ${_.phrase('She sings.', _.ta.unu, _.a.lipa)}
* ${_.phrase('They-men talk.', _.ta.sha.ofo, _.sho.lapa)}
* ${_.phrase('She loves me.', _.ta.unu, _.a.zu, _.pi.m)}

Note that we also have words to express gendered-bodies and these (like any
noun) can be used as subjects or "targets" in phrases but they then accord as
an indefinite 'person' as if we would say 'someone', 'some girl', etc.

* ${_.iwi.da} (enby-person)
* ${_.unu.da} (female-person)
* ${_.ofo.da} (male-person)

Your next read: ${_.evolution} (how things evolved)
`,
})
