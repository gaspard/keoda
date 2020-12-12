import * as _ from '.'

export const dom = _.word('dom', {
  adj: 'très fort',

  desc: () => `
Implique un contact très profond, intime, fort, non pas par la force physique
mais par l’intensité de la circulation des sensations, du “donner” et
“recevoir”.

Par exemple, la phrase suivante:

${_.taryindom}

N’implique pas automatiquement la copulation méchanique et bestiale (même si
cette dernière est possible), mais plutôt la recherche d’une très grande
profondeur et intensité qui pourrait aussi se traduire par beaucoup de
lenteur ou de câlins ou de contrastes, etc.
`,
})

export const taryindom = _.example(
  [_.taj, _.yin, _.dom],
  `Pénétre mon vagin très fort`
)
