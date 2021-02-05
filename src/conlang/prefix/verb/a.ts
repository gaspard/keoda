import { verb } from '../../mprefix'

export const a = verb('a', {
  noun: 'they (singular)',
  glo: 'they1',
})

// Have to use 'lo$' here because we also use '.lo' as suffix
// and I have no idea how to deal with this...
export const lo$ = verb('lo', {
  noun: 'submissive',
  adj: 'wet',
  glo: 'WET',
  verb: 'to surrender',
})
