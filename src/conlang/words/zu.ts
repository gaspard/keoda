import * as _ from '.'

export const zu = _.word('zu', {
  noun: 'heart',
  verb: 'love',
  desc: () =>
    `Evolution of ${_.au} into ${_.zu} mostly if conjugation requires an 'h' to bind.`,
})
_.see(_.au)

export const zuzu = _.word('zuzu', {
  verb: 'to make love',
  see: () => [_.auau],
  etym: () => [_.zu, _.zu],
})

export const zuzupa = _.alt('zuzupa', {
  glo: 'make love.mystery',
  alt: () => _.zuzu,
})
