import * as _ from '.'

export const fo = _.word('fo', {
  verb: 'to whip',
})

// === alt

export const afo = _.alt('afo', {
  glo: '3SG.**whip**',
  alt: () => _.fo,
})

export const ofolir = _.alt('ofolir', {
  glo: '1SI.**whip**.FUT',
  alt: () => _.fo,
})

export const shafo = _.alt('shafo', {
  glo: '3PL.**whip**',
  alt: () => _.fo,
})

export const foliri = _.alt('foliri', {
  glo: '**whip**.FUT.HOD',
  alt: () => _.fo,
})

export const afoliri = _.alt('afoliri', {
  glo: '3SG.**whip**.FUT.HOD',
  alt: () => _.fo,
})

export const afoliriwa = _.alt('afoliriwa', {
  glo: '3SG.**whip**.FUT.HOD.TOP',
  alt: () => _.fo,
})

export const folir = _.alt('folir', {
  glo: '**whip**.FUT',
  alt: () => _.fo,
})
