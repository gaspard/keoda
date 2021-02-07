import * as _ from '../lang'

export const Iris = _.word('Iris', {
  noun: '**Iris**',
})

export const prep = _.card('prep', {
  desc: () => `
# Prepositions

The prepositions that can be used as case marking have the gloss next to them

## Time

* ${_.ref(_.lau)}
* ${_.ref(_.uya)}
* ${_.ref(_.lulei)}
* ${_.ref(_.dem)}
* ${_.ref(_.dir)}
* ${_.ref(_.lei)}
* ${_.refAndGlo(_.lu)}
* ${_.refAndGlo(_.ju)}
* ${_.refAndGlo(_.hu)}

#### nsfw

* ${_.phrase('I like when you are undressed.', _.o.zu, _.lau, _.es.yi.nefe)}

## Nouns

* ${_.ref(_.di)}
* ${_.ref(_.dim)}
* ${_.ref(_.diwu)}
* ${_.ref(_.eku)}
* ${_.ref(_.ko)}
* ${_.refAndGlo(_.es)}
* ${_.refAndGlo(_.fu)}
* ${_.refAndGlo(_.ni)}
* ${_.refAndGlo(_.le)}
* ${_.refAndGlo(_.ne)}

#### nsfw

* ${_.phrase('Iris whom you caressed.', _.Iris.m, _.dim, _.i.mi.ema)}
* ${_.phrase('Iris who caressed you.', _.Iris, _.di, _.a.mi.ema, _.ti.m)}
* ${_.phrase('I like that you are naked.', _.o.zu, _.eku, _.oyi.e, _.nefe)}

## Location

* ${_.ref(_.don)}
* ${_.ref(_.dona)}
* ${_.ref(_.ha)}
* ${_.ref(_.jo)}
* ${_.ref(_.dau)}
* ${_.ref(_.dao)}
* ${_.refAndGlo(_.fe)}
* ${_.refAndGlo(_.ro)}
* ${_.refAndGlo(_.ri)}

${_.phrase('Where did you caress Iris ?', _.dona, _.Iris.m, _.i.mi.ema, _.q)}

## Causality

* ${_.ref(_.esi)}
* ${_.ref(_.eyu)}
* ${_.ref(_.ibu)}
* ${_.ref(_.eja)}
* ${_.ref(_.ku)}
* ${_.ref(_.eku)}
* ${_.ref(_.meu)}

${_.phrase('Did you caress Iris ?', _.eja, _.Iris.m, _.i.mi.eme, _.q)}

## Similarity

* ${_.refAndGlo(_.si)}

## Composability

* ${_.ref(_.mei)}

## Articulation

* ${_.ref(_.shu)}
* ${_.ne.shu} (but)
* ${_.ref(_.uma)}

`,
})
