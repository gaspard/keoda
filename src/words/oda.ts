import * as _ from '.'

export const yoda = _.word
( 'yoda'
, { body: 'corps avec une vulve'
  }
)

yoda.examples = () =>
[ 
]

export const oda = _.word
( 'oda'
, { body: 'corps, énergie'
  , suffix: 'qui a'
  , lang: 'interrogation, potentiel'
  }
)

oda.desc = () => `
De là vient ${_.keoda} (**la langue cachée du corps**).

Comparé à ${_.ora} l'interrogation avec ${_.oda} est plus de l'ordre de **tu pourrais ?** (potentiel) que **tu veux ?**.

Au niveau du suffixe, utilisé pour *yonoda* ou *taroda*, on indique une personne **qui a une vulve**, **qui a un pénis**, etc. On peut utiliser n’importe quelle partie du corps avec ce suffixe pour mettre l’accent sur un élément marquant d’une personne (*maoda* aux grandes mains, *djiloda* aux beaux cheveux, *nedjiloda* qui n’a pas de cheveux ). Si le contexte est sans ambiguïté, on peut simplifier *..o* (*nedjilo*, *taro* ou même *to* et *yo*).
`

oda.examples = () =>
[ { phrase: [_.a, _.yoda, _.oda, _.mi, _.moon ]
  , meaning: 'À elle, tu pourrais caresser les seins ? (à elle, il y a le potentiel pour que tu...)'
  }
, { phrase: [ _.olir, _.fo, _.oda ]
  , meaning: `On va te fouetter partout.`
  }
  /*
, { phrase: [ _.i, _.toda, _.we, _.oda, _.li, _.tar ]
  , meaning: `Par lui, sur ta droite, tu pourrais te faire sucer le pénis ?`
  }
, { phrase: [ _.o, _.rao, _.odalil ]
  , meaning: `J'aime ce petit corps.`
  }
  */
]

export const hafoda = _.word
( 'hafoda'
, { body: 'buste'
  , desc: () => `De ${_.haf} (moitié supérieure) et ${_.oda} (corps).`
  }
)

hafoda.examples = () =>
[ 
]
