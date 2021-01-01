import * as _ from '.'

export const lil = _.word('lil', {
  adj: 'petit.e',
  noun: '5',
  suffix: 'petit.e',
  see: () => [_.counting],
})
_.see(_.peulil)

export const hamalil = _.word('hamalil', {
  noun: 'auriculaire (petit doigt, 5ème doigt)',
})

export const lilaj = _.word('lilaj', {
  noun: 'étincelle',
  posit:
    'sur moi: 4 membres et 1 sexe (indiquée par un signe de main: pouce contre auriculaire)',
  desc: () => `De ${_.lil} petit et ${_.aj} feu.`,
})

export const nelil = _.word('nelil', {
  noun: 'confusion',
  adj: 'insecure',
  verb: 'to confound',
  see: () => [_.ganes, _.nanes],
})

export const esshanelil = _.alt('esshanelil', {
  glo: 'INTR.3PL.confound',
  alt: () => _.nelil,
})

export const lil5 = _.alt('lil', {
  glo: '5',
  alt: () => _.lil,
})
