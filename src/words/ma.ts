import * as _ from '.'

export const ma = _.word
( 'ma'
, { body: 'main'
  , verb: 'prendre dans la main, branler, tenir'
  }
)

export const hafma = _.word
( 'hafma'
, { body: 'doigt'
  , desc: () => `De ${_.haf} (tête, moitié supérieure) et ${_.ma} (main).`
  }
)

hafma.examples = () =>
[ { phrase: [ _.li, _.hafma ]
  , meaning: `Suce mon doigt.`
  }
]

export const nema = _.word
( 'nema'
, { body: 'sans main'
  , verb: 'lâcher'
  , desc: () => `De ${_.ne} (négation) et ${_.ma} (main).`
  }
)

ma.desc = () => `
Voir aussi les exceptions liées au suffixes ${_.i} (masser, caresser), ${_.o} (frapper, faire mal) et ${_.u} (tirer, pincer): ${_.mi}, ${_.mo}, ${_.mu}. On peut aussi utiliser la négation ${_.nema} (lâcher).
`

ma.examples = () =>
[ { phrase: [ _.ma, _.tar ]
  , meaning: `Prends mon pénis dans ta main.`
  }
, { phrase: [ _.ma, _.yon, _.melo ]
  , meaning: `Branle ma vulve doucement.`
  }
, { phrase: [ _.nema, _.feyon ]
  , meaning: `Lâche ta culotte.`
  }
]

export const mu = _.word
( 'mu'
, { verb: 'tirer, pincer avec la main'
  , desc: () => `De ${_.ma} (main) et le suffix ${_.u}.`
  }
)

mu.examples = () =>
[ { phrase: [ _.mu, _.hafmoon ]
  , meaning: `Tire sur mes tétons.`
  }
]