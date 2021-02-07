import { word } from '../keoda'
import * as _ from '../lang'

//medium.com/keoda/du-plaisir-des-conjugaisons-df444756dfc0

export const ire = word('ire', {
  noun: 'eventual future',
  glo: 'FUT.EVNT',
  etym: () => [_.ir, _.e],
})

export const iru = word('iru', {
  noun: 'distant future',
  glo: 'FUT.DIST',
  etym: () => [_.ir, _.u$],
})

export const ira = word('ira', {
  noun: 'near future',
  glo: 'FUT.PROX',
  etym: () => [_.ir, _.a],
})

export const iri = word('iri', {
  noun: 'tomorrow',
  glo: 'FUT.CRAS',
  etym: () => [_.ir, _.i$],
})

export const iro = word('iro', {
  noun: 'later today',
  glo: 'FUT.HOD',
  etym: () => [_.ir, _.o$],
})

export const ir = word('ir', {
  def: 'future',
  glo: 'FUT',
  see: () => [_.lei, _.irP],
})

export const em = _.word('em', {
  def: 'past',
  verb: 'lived',
  glo: 'PST',
  etym: () => [_.lei, _.em$],
})

export const emo = word('emo', {
  noun: 'earlier today',
  glo: 'PST.HOD',
  etym: () => [_.em, _.o$],
})

export const emi = word('emi', {
  noun: 'yesterday',
  glo: 'PST.HEST',
  etym: () => [_.em, _.i$],
})

export const ema = word('ema', {
  noun: 'recent past',
  glo: 'PST.PROX',
  etym: () => [_.em, _.a],
})

export const emu = word('emu', {
  noun: 'distant past',
  glo: 'PST.DIST',
  etym: () => [_.em, _.u$],
})

export const eme = word('eme', {
  noun: 'eventual past',
  glo: 'PST.EVNT',
  etym: () => [_.em, _.e],
})
