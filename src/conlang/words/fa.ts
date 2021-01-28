import * as _ from '.'

export const fa = _.word('fa', {
  def: 'eyes',
  verb: 'to see',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Arctic_Fox_1_%2810549184013%29.jpg/400px-Arctic_Fox_1_%2810549184013%29.jpg',
  desc: () => `
${_.phrase('Show your eyes (partially).', _.guwu, _.fan)}

${_.phrase('Look at my hand.', _.fa, _.matom)}
`,
})

export const gufa = _.word('gufa', {
  def: 'pupil (life of the eye)',
  glo: 'pupil',
  etym: () => [_.gu, _.fa],
})

export const falo = _.word('falo', {
  def: 'sadness',
  verb: 'to be sad',
  etym: () => [_.fa, _.lo],
  see: () => [_.falame],
  desc: () => `
${_.phrase("Don't be sad.", _.nefalo)}`,
})

export const fahata = _.word('fahata', {
  def: 'mirror',
  verb: 'to reflect',
  etym: () => [_.fa, _.aS],
})

// === alt

export const nefalo = _.alt('nefalo', {
  glo: 'NEG.**be sad**',
  alt: () => _.falo,
})

export const fan = _.alt('fan', {
  glo: '**eyes**~',
  alt: () => _.fa,
})

export const fatam = _.alt('fatam', {
  glo: '**eyes**.their1+',
  alt: () => _.fa,
})

export const ofa = _.alt('ofa', {
  glo: 'wex.**eyes**',
  alt: () => _.fa,
})

export const ifa = _.alt('ifa', {
  glo: 'you1.**eyes**',
  alt: () => _.fa,
})

export const afa = _.alt('afa', {
  glo: 'they1.**eyes**',
  alt: () => _.fa,
})

export const pifa = _.alt('pifa', {
  glo: 'I.**eyes**',
  alt: () => _.fa,
})

export const fahatah = _.alt('fahatah', {
  glo: '**mirror**:',
  alt: () => _.fahata,
})

export const shafa = _.alt('shafa', {
  glo: 'they9.**eyes**',
  alt: () => _.fa,
})

export const faton = _.alt('faton', {
  glo: '**eyes**.wex',
  alt: () => _.fa,
})

export const ofalem = _.alt('ofalem', {
  glo: 'wex.**eyes**.PST',
  alt: () => _.fa,
})

export const fatim = _.alt('fatim', {
  glo: '**eyes**.you1+',
  alt: () => _.fa,
})

export const fati = _.alt('fati', {
  glo: '**eyes**.you1',
  alt: () => _.fa,
})
