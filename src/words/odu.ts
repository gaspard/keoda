import * as _ from '.'

export const odu = _.word('odu', {
  noun: 'rejoindre, venir, se tirer le corps vers',
  derived: () => [_.oda, _.u],
})

// Odu fe oda okelilir kebaj.
export const odufeodaokelilirkebaj = _.example(
  [_.odu, _.fe, _.oda, _.o, _.keli, _.lir, _.kebaj],
  `Viens sur moi, je vais te lécher les couilles.`
)
