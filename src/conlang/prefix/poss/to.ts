import { prefix } from '../../zulapa'

export const to = prefix('to', {
  noun: 'indefinite me/us',
  glo: 'POSS.I/we',
})

// =========== glossing fix

prefix('tom', {
  noun: 'I/we',
  glo: '**I/we**.ACC+',
})

prefix('toh', {
  noun: 'I/we',
  glo: '**I/we**.ACC-',
})

prefix('ton', {
  noun: 'I/we',
  glo: '**I/we**.ACC',
})

prefix('tosho', {
  noun: 'us (PL)',
  glo: 'POSS.we',
})

prefix('tasha', {
  noun: 'them (PL)',
  glo: 'POSS.they',
})

prefix('topi', {
  noun: 'my',
  glo: 'POSS.I',
})
