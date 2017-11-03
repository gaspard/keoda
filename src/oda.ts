import {Word, A, keoda, mi, moon} from './'
export const yoda: Word =
{ body: [ 'corps avec une vulve' ]
}

export const oda =
{ body: [ 'corps', 'énergie' ]
, suffix: 'qui a'
, lang: [ 'interrogation', 'potential' ]
, description: `
De là vient ${keoda} (**la langue cachée du corps**).

Comparé à ${ora} l'interrogation avec ${oda} est plus de l'ordre de **tu pourrais ?** (potentiel) que **tu veux ?**.

Au niveau du suffixe, utilisé pour *yonoda* ou *taroda*, on indique une personne **qui a une vulve**, **qui a un pénis**, etc. On peut utiliser n’importe quelle partie du corps avec ce suffixe pour mettre l’accent sur un élément marquant d’une personne (*maoda* aux grandes mains, *djiloda* aux beaux cheveux, *nedjiloda* qui n’a pas de cheveux ). Si le contexte est sans ambiguïté, on peut simplifier *..o* (*nedjilo*, *taro* ou même *to* et *yo*).
`
}
oda.examples =
[ { phrase: [A, yoda, oda, mi, moon ]
  , meaning: 'À elle, tu pourrais caresser les seins ? (à elle, il y a le potentiel pour que tu...)'
  }
/*
> Olir fo oda. **On va te fouetter partout.**
> I toda we oda li tar ? **De lui sur ta droite, tu pourrais te faire sucer le pénis ?**
> O rao odalil. **J’aime ce petit corps.**
*/
]
