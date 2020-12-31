import * as _ from '.'

export const to = _.word('to', {
  det: 'my/our',
  prefix: 'my/our',
  suffix: 'my/our',
  glo: 'POSS.1SG.INDF',
  see: () => [_.poss],
})

export const tosho = _.word('tosho', {
  det: 'our',
  suffix: 'our',
  glo: 'POSS.1PL',
  see: () => [_.poss],
})

export const toshi = _.word('toshi', {
  det: 'your',
  suffix: 'your',
  glo: 'POSS.2PL',
  see: () => [_.poss],
})

export const tosha = _.word('tosha', {
  det: 'their',
  suffix: 'their',
  glo: 'POSS.3PL',
  see: () => [_.poss],
})

export const topi = _.word('topi', {
  det: 'mine',
  suffix: 'mine',
  glo: 'POSS.1SG',
  see: () => [_.poss],
})

// ========== ALT

export const toI = _.alt('to', {
  glo: '1SG.INDF',
  alt: () => _.to,
})
