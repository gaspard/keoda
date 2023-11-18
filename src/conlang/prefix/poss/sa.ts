import * as _ from '../../words'
import { alt, prefix } from '../../zulapa'

export const sa = prefix('sa', {
  noun: 'they (singular)',
  glo: 'they',
  cla: 'noun',
})

export const sasha = prefix('sasha', {
  noun: 'they (PL)',
  glo: '**their (PL)**',
  sglo: 'POSS.**them (PL)**',
  scla: 'noun',
})

export const swi = alt('swi', {
  alt: () => sa,
  id: 'sa-wi',
  noun: 'their',
  glo: 'their.NB',
})

export const su = alt('su', {
  alt: () => sa,
  id: 'sa-nu',
  noun: 'her',
  glo: 'her',
})

export const so = alt('so', {
  alt: () => sa,
  id: 'sa-to',
  noun: 'his',
  glo: 'his',
})

// ====================== ACC (m)

export const am = alt('am', {
  alt: () => _.a,
  id: 'a-m',
  noun: 'them',
  glo: '**them**.ACC',
})

export const wim = alt('wim', {
  alt: () => _.wi,
  id: 'wi-m',
  noun: 'them-enby',
  glo: '**them**.NB.ACC',
})

export const num = alt('num', {
  alt: () => _.nu,
  id: 'nu-m',
  noun: 'her',
  glo: '**them**.FEM.ACC',
})

export const tom = alt('tom', {
  alt: () => _.to,
  id: 'to-m',
  noun: 'him',
  glo: '**them**.MASC.ACC',
})

// ====================== DAT (ni)

export const nia = alt('nia', {
  alt: () => _.a,
  id: 'ni-a',
  noun: 'them',
  glo: 'DAT.**them**',
})

export const niwi = alt('niwi', {
  alt: () => _.wi,
  id: 'ni-wi',
  noun: 'them',
  glo: 'DAT.**them**.NB',
})

export const ninu = alt('ninu', {
  alt: () => _.nu,
  id: 'ni-nu',
  noun: 'her',
  glo: 'DAT.**them**.FEM',
})

export const nito = alt('nito', {
  alt: () => _.to,
  id: 'ni-to',
  noun: 'him',
  glo: 'DAT.**them**.MASC',
})
