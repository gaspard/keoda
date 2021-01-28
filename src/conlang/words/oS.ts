import * as _ from '.'

export const oS = _.word('o', {
  id: 'oS',
  def: '**weˣ**',
  prefix: '**ourˣ**',
  suffix: '**ourˣ**',
  glo: '**weˣ**',
  see: () => [_.oC, _.subj],
})

// ========== ALT

export const futom = _.alt('futom', {
  glo: 'to.**wex**',
  alt: () => _.oS,
})

export const futon = _.alt('ton', {
  glo: 'of.**we9**~',
  alt: () => _.futon,
})

export const futo = _.alt('futo', {
  glo: 'to.**wex**',
  alt: () => _.oS,
})
