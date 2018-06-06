import * as _ from '.'

export const li = _.word
( 'li'
, { body: 'bouche'
  , verb: 'sucer'
  }
)

li.examples = () =>
[ 
]

export const keli = _.word
( 'keli'
, { body: 'langue'
  , verb: 'lécher'
  , desc: () => `De ${_.ke} (caché) et ${_.li} (bouche): caché dans la bouche.`
  }
)

keli.examples = () =>
[ { phrase: [ _.keli, _.keyon ]
  , meaning: `Lèche moi la vulve.`
  }
]