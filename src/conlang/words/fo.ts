import * as _ from '.'

export const fo = _.word('fo', {
  verb: 'to whip',
})

_.see(_.ofolirpal)

export const zofolir = _.alt('zofolir', {
  glo: 'I.PAS.whip.FUT',
  alt: () => _.fo,
})

export const zikeifo = _.alt('zofolir', {
  glo: 'you.PAS.HONOR.whip',
  alt: () => _.fo,
})

export const ofolir = _.alt('ofolir', {
  glo: '1SG.INDF.whip.FUT',
  alt: () => _.fo,
})
