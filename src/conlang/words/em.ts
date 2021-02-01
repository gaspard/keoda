import * as _ from '.'

export const em = _.word('em', {
  suff: 'lived',
  verb: 'to live',
})

export const nem = _.word('nem', {
  noun: 'death',
  verb: 'to die, to make dead',
  etym: () => [_.neW, _.em],
})

// ============== alt
export const ohemleme = _.alt('ohemleme', {
  glo: 'wex.**live**.PST.EVNT',
  alt: () => _.em,
})

export const ihem = _.alt('ihem', {
  glo: '2SG.**live**',
  alt: () => _.em,
})

export const nemetonam = _.alt('nemetonam', {
  glo: '**death**.wex+',
  alt: () => _.nem,
})

// More in the sense "made dead"
export const esonem = _.alt('esonem', {
  glo: 'PASS.wex.**die**',
  alt: () => _.nem,
})
