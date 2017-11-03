import * as _ from '.'

export const ne = _.word
( 'ne'
, { prefix: 'négation'
  }
)

ne.examples = () =>
[ { phrase: [ _.i, _.nefeoda ]
  , meaning: `Enlève tes habits.`
  }
]