import * as _ from '..'

export const Iris = _.word('Iris', {
  noun: 'Iris',
})
export const Irisam = _.alt('Irisam', {
  glo: 'Iris.DAT',
  alt: () => _.Iris,
})
export const fuIris = _.alt('fuIris', {
  glo: 'SBJ.Iris',
  alt: () => _.Iris,
})

export const q = _.word('?', {
  glo: '?',
})

export const prep = _.card('prep', {
  lang: 'All prepositions',
  desc: () => `

I am not 100% sure all these are technically prepositions but they are "the small
connecting words in a phrase".

# Time

* ${_.lau} (always)
* ${_.ul} (until)
* ${_.uya} (since)
* ${_.dem} (when.PST)
* ${_.dir} (when.FUT)
* ${_.lei} (then)

${_.phrase('I like when you undress (your-self).', _.ozu, _.lau, _.esyinefe)}

# Nouns

* ${_.di} (who)
* ${_.dim} (whom)
* ${_.eku} (that)
* ${_.fu} (by)
* ${_.ko} (with)
* ${_.es} (self)
* ${_.ni} (to.SBJ)

${_.phrase('Iris whom you caressed.', _.Irisam, _.dim, _.imilema)}

${_.phrase('Iris who caressed you.', _.Iris, _.di, _.amilema, _.tim)}

${_.phrase('I like that you are naked.', _.ozu, _.eku, _.yihe, _.nefe)}

# Location

* ${_.don} (where body)
* ${_.dona} (where place)
* ${_.ro} (in)
* ${_.ri} (out)
* ${_.fe} (on/covering)
* ${_.dao} (from.LOC)
* ${_.dau} (to.LOC)

${_.phrase('Where did you caress Iris ?', _.dona, _.Irisam, _.imilema, _.q)}

# Causality

* ${_.esi} (in order to)
* ${_.eyu} (if)
* ${_.ibu} (for)
* ${_.edja} (plausibility)

${_.phrase('Did you caress Iris ?', _.edja, _.Irisam, _.imileme, _.q)}

# Similarity

* ${_.si} (as if)

# Composability

* ${_.mei} (made of)

# Articulation

* ${_.shu} (and)
* ${_.uma} (or)

`,
})
