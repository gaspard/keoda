import * as _ from '.'

export const gu = _.word('gu', {
  adj: 'obscurité, gestation, profondeur',
  prefix: 'profondeur',
  desc: () =>
    `On peut voir ${_.gu} comme le mouvement de l'esprit ${_.ga} (esprit) ${_.u} (tiré)`,
})
_.see(_.gufi)

export const gulir = _.word('gulir', {
  noun: 'souhaiter (gu du future)',
  derived: [_.gu, _.lir],
})

export const gulem = _.word('gulem', {
  noun: 'se souvenir (gu du passé)',
  derived: [_.gu, _.lem],
})

export const guna = _.word('guna', {
  noun: 'vie',
})
_.see(_.gufa)

export const guo = _.word('guo', {
  verb: 'mourir',
  derived: [_.gu, _.o],
})

export const gui = _.word('gui', {
  verb: 'naître',
  derived: [_.gu, _.i],
})
_.see(_.iwigui)

export const guwu = _.word('guwu', {
  verb: 'donner',
  derived: [_.gu, _.wu],
})
export const guwuna = _.word('guwuna', {
  noun: 'don',
  derived: [_.guwu, _.na],
})

export const guru = _.word('guru', {
  noun: 'réalisation des profondeurs',
  derived: [_.gu, _.ru],
})

export const gugai = _.word('gugai', {
  noun: 'fertilité',
  adj: 'fertile',
  derived: [_.gu, _.gai],
})

export const augu = _.word('augu', {
  adj: 'confiance',
  derived: [_.au, _.gu],
})

export const negu = _.word('negu', {
  noun: `l'agitation, vouloir changer, changer le monde, chercher la perfection pour ne plus rien sentir, la dissociation`,
  desc: () => `C'est l'inverse de la confiance: ${_.augu}`,
})
_.see(_.shipa)

export const guyuina = _.word('guyuina', {
  noun: 'pomme (le fruit de la vie)',
})
