import * as _ from '../lang'

// these are not exported. Only used to fix glo.
_.alt('nito', {
  glo: 'DAT.**me/us**',
  alt: () => _.ti,
})

_.alt('nitopi', {
  glo: 'DAT.**me**',
  alt: () => _.ti,
})

_.alt('niti', {
  glo: 'DAT.**you**',
  alt: () => _.ti,
})

_.alt('nita', {
  glo: 'DAT.**them**',
  alt: () => _.ti,
})
