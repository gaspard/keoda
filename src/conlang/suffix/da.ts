import { alt, suffix } from '../zulapa'

export const da = suffix('da', {
  noun: 'self',
  glo: 'SELF',
  cla: 'noun',
  scla: 'noun',
})

// TODO: need to fix resolution of prefix.suffix.suffix to be prefix.noun.suffix.
// For this we need to lazy resolve on usage (and not during access).
export const daN = alt('da', {
  id: 'daN',
  glo: '**self**',
  alt: () => da,
})
