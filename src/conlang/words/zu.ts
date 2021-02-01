import * as _ from '.'

export const zu = _.word('zu', {
  noun: '**heart**',
  verb: 'to love',
  see: () => [_.au],
})

export const zuzu = _.word('zuzu', {
  verb: 'to make love',
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

export const shozuzu = _.alt('shozuzu', {
  glo: '1PL.PRS.**make love**',
  alt: () => _.zuzu,
})

export const esoluzu = _.alt('esoluzu', {
  glo: 'PASS.wex.CONT.**heart**',
  alt: () => _.zu,
})
