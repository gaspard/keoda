import * as _ from '..'

export const Iris = _.word('Iris', {
  noun: 'Iris',
})
export const Irisam = _.alt('Irisam', {
  glo: '**Iris**+',
  alt: () => _.Iris,
})
export const fuIris = _.alt('fuIris', {
  glo: 'ERG.**Iris**',
  alt: () => _.Iris,
})

export const prep = _.card('prep', {
  desc: () => `
# Prepositions

I am not 100% sure all these are technically prepositions but they are "the small
connecting words in a phrase".

## Time

* ${_.lau} (always)
* ${_.uya} (since)
* ${_.lu} (while)
* ${_.lulei} (until)
* ${_.dem} (when.PST)
* ${_.dir} (when.FUT)
* ${_.lei} (then)

#### nsfw

* ${_.phrase('I like when you are undressed.', _.ozu, _.lau, _.esyinefe)}

## Nouns

* ${_.di} (who)
* ${_.dim} (whom)
* ${_.eku} (that)
* ${_.fu} (by*)
* ${_.ko} (with)
* ${_.es} (self)
* ${_.ni} (to*)

\\* ${_.fu} and ${_.ni} are prefix that modify the noun to \`ERG\`
and \`DAT\` cases respectively. Think of ${_.fuJane} as meaning "does Jane".

See word order for more on cases: ${_.order}

#### nsfw

* ${_.phrase('Iris whom you caressed.', _.Irisam, _.dim, _.imilema)}
* ${_.phrase('Iris who caressed you.', _.Iris, _.di, _.amilema, _.tim)}
* ${_.phrase('I like that you are naked.', _.ozu, _.eku, _.yihe, _.nefe)}

## Location

* ${_.don} (where body)
* ${_.dona} (where place)
* ${_.ha} (up)
* ${_.jo} (down)
* ${_.ro} (in)
* ${_.ri} (out)
* ${_.fe} (on/covering)
* ${_.dau} (to.LOC)
* ${_.dao} (from.LOC)

${_.phrase('Where did you caress Iris ?', _.dona, _.Irisam, _.imilema, _.q)}

## Causality

* ${_.esi} (in order to)
* ${_.eyu} (if)
* ${_.ibu} (for)
* ${_.eja} (plausibility)
* ${_.ku} (and/implies)
* ${_.meu} (otherwise)

${_.phrase('Did you caress Iris ?', _.eja, _.Irisam, _.imileme, _.q)}

## Similarity

* ${_.si} (as if)

## Composability

* ${_.mei} (made of)
* ${_.ru} (become)

## Articulation

* ${_.shu} (and)
* ${_.shuhe} (but)
* ${_.uma} (or)

`,
})
