import * as _ from '.'

export const moon = _.word
( 'moon'
, { body: 'seins'
  , position: 'à genoux, buste au sol'
  }
)

moon.examples = () =>
[ { phrase: [ _.i, _.mi, _.moon, _.menu ]
  , meaning: `Caresse-toi les seins en effleurant.`
  }
]

export const hafmoon = _.word
( 'hafmoon'
, { body: 'téton'
  }
)

hafmoon.examples = () =>
[ { phrase: [ _.la, _.hafmoon, _.dom ]
  , meaning: `Embrasse-moi les tétons bien fort.`
  }
]