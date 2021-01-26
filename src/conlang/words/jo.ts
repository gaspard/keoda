import * as _ from '.'

export const jo = _.word('jo', {
  adj: 'close, proximal',
  prep: 'down',
  etym: () => [_.dau, _.ojo],
  see: () => [_.ha],
})

export const hajo = _.word('hajo', {
  verb: 'to take',
  etym: () => [_.ha, _.jo],
})

export const joha = _.word('joha', {
  verb: 'to reject',
  etym: () => [_.jo, _.ha],
})

export const muhajo = _.word('muhajo', {
  verb: 'to pick up',
  etym: () => [_.mu, _.hajo],
})

export const joda = _.word('joda', {
  noun: 'child',
  etym: () => [_.jo, _.oda],
  see: () => [_.family],
})

export const jona = _.word('jona', {
  noun: 'girl (child)',
  etym: () => [_.jo, _.ana],
  see: () => [_.family],
})

export const jowi = _.word('jowi', {
  noun: 'enby (child)',
  etym: () => [_.jo, _.iwi],
  see: () => [_.family],
})

export const joto = _.word('joto', {
  noun: 'boy (child)',
  etym: () => [_.jo, _.oto],
  see: () => [_.family],
})

// ==== alt

export const jonato = _.alt('jonato', {
  glo: '**girl**.boy',
  alt: () => _.jona,
})

export const jowina = _.alt('jowina', {
  glo: '**enby child**.girl',
  alt: () => _.jowi,
})

export const ahajolemu = _.alt('ahajolemu', {
  glo: '3SG.**take**.PST.DST',
  alt: () => _.hajo,
})

export const jonam = _.alt('jonam', {
  glo: '**daughter**.ACC',
  alt: () => _.jona,
})
