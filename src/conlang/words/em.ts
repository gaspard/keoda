import * as _ from '.'

export const em = _.word('em', {
  suffix: 'lived',
  verb: 'to live',
})

export const nem = _.word('nem', {
  noun: 'death',
  verb: 'to die, to make dead',
  etym: () => [_.ne, _.em],
})

// ============== alt
export const ohemleme = _.alt('ohemleme', {
  glo: '1SI.**live**.PST.EVNT',
  alt: () => _.em,
})

export const ihem = _.alt('ihem', {
  glo: '2SG.**live**',
  alt: () => _.em,
})

export const nemetonam = _.alt('nemetonam', {
  glo: '**death**.POSS.1SI.ACC',
  alt: () => _.nem,
})

// More in the sense "made dead"
export const esonem = _.alt('esonem', {
  glo: 'PASS.1SI.**die**',
  alt: () => _.nem,
})
