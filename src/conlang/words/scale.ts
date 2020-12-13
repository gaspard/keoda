import * as _ from '.'

export const scale = _.card('nepal', {
  noun: 'échelle du néant',
  lang: 'Certains états de conscience sont liés aux nombres',
  see: () => [_.nepa, _.counting],
  desc: () => `
# Échelle du néant

## Les états heureux

* 10 ${_.djipa} (souvenir)
* 9 ${_.dapa} (joie)
* 8 ${_.jepa} (appartenance)
* 7 ${_.fepa} (fierté)
* 6 ${_.shipa} (croyance)

## Et à partir d'ici ça commence à plus aller très bien..

* 5 ${_.nelil} (confusion)
* 4 ${_.neka} (honte)
* 3 ${_.nepe} (oubli)
* 2 ${_.nede} (stress)

## Et ici, c'est l'enfer

* 1 ${_.nepi} (division)
`,
})
