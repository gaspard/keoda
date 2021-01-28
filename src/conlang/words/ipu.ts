import * as _ from '.'

export const ipu = _.word('ipu', { def: '1000' })
_.see(_.count)

// === alt

export const ipudeuki = _.alt('ipudeuki', {
  glo: '**1000**.*2*.*long*',
  alt: () => _.ipu,
})

export const ipupeuki = _.alt('ipupeuki', {
  glo: '**1000**.*3*.*long*',
  alt: () => _.ipu,
})

export const ipukauki = _.alt('ipukauki', {
  glo: '**1000**.*4*.*long*',
  alt: () => _.ipu,
})
