import * as _ from '.'

export const i = _.word
( 'i'
, { body: 'caresser'
  , prefix: 'à toi'
  , desc: () => `Il y a une exception pour le suffixe ajouté à ${_.ma} (main): dans ce cas, on ne dit pas 'mani' mais directement ${_.mi}.`
  }
)

i.examples = () =>
[ { phrase: [ _.mi, _.oda ]
  , meaning: `Masse-moi le corps.`
  }
, { phrase: [ _.a, _.mi, _.moon ]
  , meaning: `Masse-lui/elle les seins.`
  }
, { phrase: [ _.i, _.mi, _.yon ]
  , meaning: `Masse-toi la vulve.`
  }
, { phrase: [ _.hafbaji, _.oda ]
  , meaning: `Caresse mon corps avec ta cuisse.`
  }
, { phrase: [ _.olir, _.i, _.ma, _.tar ]
  , meaning: `On va se masturber (chacun pour soi).`
  }
]