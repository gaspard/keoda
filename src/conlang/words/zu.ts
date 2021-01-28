import * as _ from '.'

export const zu = _.word('zu', {
  noun: 'heart',
  action: 'to love',
  see: () => [_.au],
})

export const zuzu = _.word('zuzu', {
  action: 'to make love',
  see: () => [_.auau, _.kude],
  etym: () => [_.zu, _.zu],
})

export const zunes = _.word('zunes', {
  noun: 'love',
  etym: () => [_.zu, _.nes],
})

export const zuzupa = _.alt('zuzupa', {
  glo: '**make love**.MYST',
  alt: () => _.zuzu,
})

export const ozu = _.alt('ozu', {
  glo: 'wex.**heart**',
  alt: () => _.zu,
})

export const shozuzu = _.alt('shozuzu', {
  glo: '1PL.PRS.**make love**',
  alt: () => _.zuzu,
})

export const ahanazu = _.alt('ahanazu', {
  glo: 'they1.*tree*.**heart**',
  alt: () => _.zu,
})

export const esoluzu = _.alt('esoluzu', {
  glo: 'PASS.wex.CONT.**heart**',
  alt: () => _.zu,
})
