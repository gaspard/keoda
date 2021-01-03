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
