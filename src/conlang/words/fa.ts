import * as _ from '.'

export const fa = _.word('fa', {
  noun: 'eyes',
  verb: 'to look',
  desc: () => `
${_.phrase('Show your eyes.', _.guwu, _.fam)}

${_.phrase('Look at my hand.', _.fa, _.matoham)}
`,
})

export const gufa = _.word('gufa', {
  noun: 'pupil (life of the eye)',
  glo: 'pupil',
  etym: () => [_.gu, _.fa],
})

export const falo = _.word('falo', {
  noun: 'sadness',
  verb: 'to be sad',
  etym: () => [_.fa, _.lo],
  desc: () => `
${_.phrase("Don't be sad.", _.nefalo)}`,
})

export const nefalo = _.alt('nefalo', {
  glo: 'NEG.be sad',
  alt: () => _.falo,
})

export const fam = _.alt('fam', {
  glo: 'eyes.ACC',
  alt: () => _.fa,
})

export const fatam = _.alt('fatam', {
  glo: 'eyes.3SG.POSS.ACC',
  alt: () => _.fa,
})
