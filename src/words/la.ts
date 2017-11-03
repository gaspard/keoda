import * as _ from '.'

export const la = _.word
( 'la'
, { body: 'lèvres'
  , verb: 'embrasser'
  }
)

la.examples = () =>
[ { phrase: [ _.la, _.la ]
  , meaning: `Embrasse moi sur les lèvres.`
  }
]