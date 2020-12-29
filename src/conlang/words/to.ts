import * as _ from '.'

export const to = _.word('to', {
  det: 'my/our (1SG.INDF)',
  prefix: 'my/our',
  suffix: 'my/our',
  glo: '1SG.INDF.POSS',
  see: () => [_.ti, _.tei, _.ta, _.wu],
})

_.see(_.oda)
_.see(_.pronouns)

export const tosho = _.word('tosho', {
  noun: 'notre',
  suffix: 'notre',
})

export const toshi = _.word('toshi', {
  noun: 'votre',
  suffix: 'votre',
})

export const tosha = _.word('tosha', {
  noun: 'leur',
  suffix: 'leur',
})

export const topi = _.word('topi', {
  noun: 'mon à moi',
  suffix: 'mon à moi',
})
