import { word, fa, im } from '.'

export const baj = word
( 'baj'
, { body: 'membre inférieur'
  }
)

baj.examples = () =>
[ 
]

export const hafbaj = word
( 'hafbaj'
, { body: 'cuisse'
  }
)

hafbaj.examples = () =>
[ { phrase: [ fa, hafbaj, im ]
  , meaning: `Montre tes cuisses fermées.`
  }
]

export const hafbaji = word
( 'hafbaji'
, { verb: 'caresser avec la cuisse'
  }
)

hafbaji.examples = () =>
[ 
]

import * as _ from '.'

export const kebaj = _.word
( 'kebaj'
, { body: 'testicules'
  , desc: () => `Caché ${_.ke} entre les jambes ${_.baj}.`
  }
)

kebaj.examples = () =>
[ { phrase: [ _.odu, _.fe, _.oda, _.olir, _.keli, _.kebaj ]
  , meaning: `Viens sur moi, je vais te lécher les couilles.`
  }
]