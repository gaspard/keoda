import { prefix } from '../../zulapa'

// TODO: how do we fix the confusion between "you" and "your" ?
// ti = you, tim = you.ACC
// mati = hand of you
// tima = your hand
export const ti = prefix('ti', {
  noun: 'you',
  // glo: 'POSS.you',
  cla: 'noun',
})

prefix('tishi', {
  id: 'ti-shi',
  noun: 'their (PL)',
  glo: 'POSS.**you.PL**',
})

prefix('tishim', {
  id: 'ti-shi-m',
  noun: 'you (PL)',
  glo: '**you.PL**.ACC',
})
