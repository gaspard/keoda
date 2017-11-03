import * as _ from '.'

export const pal = _.word
( 'pal'
, { body: 'fesses'
  }
)

pal.examples = () =>
[ { phrase: [ _.olir, _.fo, _.pal ]
  , meaning: `On va te fouetter les fesses.`
  }
]

export const kepal = _.word
( 'kepal'
, { body: 'anus'
  , desc: () => `De ${_.ke} (caché) et ${_.pal} (fesses).`
  }
)

kepal.examples = () =>
[ { phrase: [ _.kepal, _.hafma ]
  , meaning: `Prends mon doigt avec ton anus.`
  }
, { phrase: [ _.o, _.taro, _.kepal ]
  , meaning: `On frappe ton anus avec notre pénis.`
  }
]
