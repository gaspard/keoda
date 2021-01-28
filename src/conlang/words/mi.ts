import * as _ from '.'

export const mi = _.word('mi', {
  verb: 'to caress',
  glo: '**hand**.VERB.CARE',
  etym: () => [_.ma, _.iC],
  see: () => [_.mo, _.mu],
  desc: () => `${_.phrase('Give me a hug.', _.mi, _.au)}`,
})

export const imilema = _.alt('imilema', {
  glo: 'you1.**caress**.PST.HEST',
  alt: () => _.mi,
})

export const amilema = _.alt('amilema', {
  glo: 'they1.**caress**.PST.HEST',
  alt: () => _.mi,
})

export const imileme = _.alt('imilema', {
  glo: '2SG.**caress**.PST.EVNT',
  alt: () => _.mi,
})

export const esomilir = _.alt('esomilir', {
  glo: 'PASS.wex.**caress**.FUT',
  alt: () => _.mi,
})

export const omi = _.alt('omi', {
  glo: 'wex.**caress**',
  alt: () => _.mi,
})

export const esami = _.alt('esami', {
  glo: 'PASS.they1.**caress**',
  alt: () => _.mi,
})

export const esilumilem = _.alt('esilumilem', {
  glo: 'PASS.2SG.CONT.**caress**.PST',
  alt: () => _.mi,
})

export const ilumiliro = _.alt('ilumiliro', {
  glo: 'you1.CONT.**caress**.FUT.HOD',
  alt: () => _.liro,
})
