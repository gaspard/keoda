import * as _ from '.'

export const mi = _.word
( 'mi'
, { verb: 'masser'
  , desc: () => `De ${_.ma} (main) avec le suffixe ${_.i} (masser).`
  }
)

mi.examples = () =>
[ { phrase: [ _.mi, _.oda ]
  , meaning: `Masse-moi le corps, partout.`
  }
, { phrase: [ _.olir, _.mi, _.pal ]
  , meaning: `On va te masser les fesses.`
  }
, { phrase: [ _.i, _.mi, _.moon ]
  , meaning: `Masse-toi les seins.`
  }
]
