import * as _ from '.'

export const tar = _.word
( 'tar'
, { body: 'pénis'
  , verb: 'pénétrer avec le pénis'
  }
)

export const toda = _.word
( 'toda'
, { body: 'personne avec un pénis'
  }
)

toda.examples = () =>
[ 
]

export const taro = _.word
( 'taro'
, { body: 'frapper du pénis'
  , desc: () => `Basé sur ${_.tar} (pénis) et ${_.o} (frapper).`
  }
)

taro.examples = () =>
[ { phrase: [ _.taro, _.yon ]
  , meaning: `Frappe ma vulve avec ton pénis.`
  }
]

export const haftar = _.word
( 'haftar'
, { body: 'gland'
  , desc: () => `De ${_.haf} (tête, partie supérieure) et ${_.tar} (pénis).`
  }
)

haftar.examples = () =>
[ { phrase: [ _.li, _.haftar ]
  , meaning: `Suce mon gland.`
  }
]

tar.desc = () => `
Avec le suffixe ${_.o}, ça devient ${_.taro} (frapper du pénis). Avec ${_.oda},
on a ${_.toda} (personne avec un pénis). Le gland se dit ${_.haftar}.
`
tar.examples = () =>
[ { phrase: [ _.tar, _.yin ]
  , meaning: `Pénètre avec ton pénis, mon vagin.`
  }
, { phrase: [ _.ma, _.tar ]
  , meaning: `Masturbe mon pénis avec ta main.`
  }
, { phrase: [ _.i, _.mi, _.tar ]
  , meaning: `Caresse-toi le pénis.`
  }
]
