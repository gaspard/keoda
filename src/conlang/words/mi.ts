import * as _ from '.'

export const mi = _.word('mi', {
  verb: 'to caress',
  glo: '**hand**.VERB.CARE',
  etym: () => [_.ma, _.i],
  see: () => [_.mo, _.mu],
  desc: () => `${_.phrase('Give me a hug.', _.mi, _.au)}`,
})

export const imilema = _.alt('imilema', {
  glo: '2SG.**caress**.PST.HEST',
  alt: () => _.mi,
})

export const amilema = _.alt('amilema', {
  glo: '3SG.**caress**.PST.HEST',
  alt: () => _.mi,
})

export const imileme = _.alt('imilema', {
  glo: '2SG.**caress**.PST.EVNT',
  alt: () => _.mi,
})

export const esomilir = _.alt('esomilir', {
  glo: 'PASS.1SI.**caress**.FUT',
  alt: () => _.mi,
})

export const omi = _.alt('omi', {
  glo: '1SI.**caress**',
  alt: () => _.mi,
})

export const esami = _.alt('esami', {
  glo: 'PASS.3SG.**caress**',
  alt: () => _.mi,
})

export const esilumilem = _.alt('esilumilem', {
  glo: 'PASS.2SG.CONT.**caress**.PST',
  alt: () => _.mi,
})
