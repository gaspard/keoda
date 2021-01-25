import * as _ from '.'

export const ru = _.word('ru', {
  noun: 'creation (Sristi)',
  suffix: 'to become',
  verb: 'to emerge',
  see: () => [_.prep],
})

export const runa = _.word('runa', {
  noun: 'emergence (Krtya कृत्य)',
  etym: () => [_.ru, _.na],
})

export const leiru = _.word('leiru', {
  noun: 'destiny',
  etym: () => [_.lei, _.ru],
})

export const leirui = _.word('leirui', {
  noun: 'fortune',
  etym: () => [_.leiru, _.i],
})

export const leiruo = _.word('leiruo', {
  noun: 'misfortune',
  adv: 'alas',
  etym: () => [_.leiru, _.o],
})

export const kuru = _.word('kuru', {
  verb: 'to must',
  etym: () => [_.ku, _.ru],
})

export const nuru = _.word('nuru', {
  noun: 'apophenia',
  etym: () => [_.nu, _.ru],
  see: () => [_.conrad, _.guru],
  desc: () => `
Apophenia is the perception of or belief in connectedness among unrelated
phenomena (concept from psychologist Klaus Conrad).

In keoda, this litteraly means "the emergence of hubris".
`,
})

// === alt

export const piyiru = _.alt('piyiru', {
  glo: '1SG.DIM.**become**',
  alt: () => _.ru,
})

export const okuru = _.alt('okuru', {
  glo: '1SI.**must**',
  alt: () => _.kuru,
})

export const iru = _.alt('iru', {
  glo: '2SG.**become**',
  alt: () => _.ru,
})

export const esarulem = _.alt('esarulem', {
  glo: 'PASS.3SG.**become**.PST',
  alt: () => _.e,
})

export const shokuru = _.alt('shokuru', {
  glo: '1PL.**must**',
  alt: () => _.kuru,
})
