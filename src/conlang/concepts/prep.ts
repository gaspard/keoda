import * as _ from '../words'

export const Iris = _.word('Iris', {
  noun: '**Iris**',
})

export const prep = _.card('prep', {
  desc: () => `
# Prepositions

I am not 100% sure all these are technically prepositions but they are "the small
connecting words in a phrase".

## Time

* ${_.nounRef(_.lau)}
* ${_.nounRef(_.uya)}
* ${_.nounRef(_.lu)}
* ${_.nounRef(_.lulei)}
* ${_.nounRef(_.dem)}
* ${_.nounRef(_.dir)}
* ${_.nounRef(_.lei)}
* ${_.nounRef(_.ju)}
* ${_.nounRef(_.hu)}

#### nsfw

* ${_.phrase('I like when you are undressed.', _.o.zu, _.lau, _.esyinefe)}

## Nouns

* ${_.nounRef(_.di)}
* ${_.nounRef(_.dim)}
* ${_.nounRef(_.eku)}
* ${_.nounRef(_.fu)}
* ${_.nounRef(_.ko)}
* ${_.nounRef(_.es)}
* ${_.nounRef(_.ni)}

\\* ${_.fu} and ${_.ni} are prefix that modify the noun to \`ERG\`
and \`DAT\` cases respectively. Think of ${_.fuJane} as meaning "does Jane".

See word order for more on cases: ${_.order}

#### nsfw

* ${_.phrase('Iris whom you caressed.', _.Iris.m, _.dim, _.i.mi.ema)}
* ${_.phrase('Iris who caressed you.', _.Iris, _.di, _.a.mi.ema, _.ti.m)}
* ${_.phrase('I like that you are naked.', _.o.zu, _.eku, _.o.yi.e, _.nefe)}

## Location

* ${_.nounRef(_.don)}
* ${_.nounRef(_.dona)}
* ${_.nounRef(_.ha)}
* ${_.nounRef(_.jo)}
* ${_.nounRef(_.ro)}
* ${_.nounRef(_.ri)}
* ${_.nounRef(_.fe)}
* ${_.nounRef(_.dau)}
* ${_.nounRef(_.dao)}

${_.phrase('Where did you caress Iris ?', _.dona, _.Iris.m, _.i.mi.ema, _.q)}

## Causality

* ${_.nounRef(_.esi)}
* ${_.nounRef(_.eyu)}
* ${_.nounRef(_.ibu)}
* ${_.nounRef(_.eja)}
* ${_.nounRef(_.ku)}
* ${_.nounRef(_.meu)}

${_.phrase('Did you caress Iris ?', _.eja, _.Iris.m, _.i.mi.eme, _.q)}

## Similarity

* ${_.nounRef(_.si)}

## Composability

* ${_.nounRef(_.mei)}
* ${_.nounRef(_.ru)}

## Articulation

* ${_.nounRef(_.shu)}
* ${_.nounRef(_.ne.shu)}
* ${_.nounRef(_.uma)}

`,
})
