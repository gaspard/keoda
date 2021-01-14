import * as _ from '.'

// bahasa indonesia: paham
export const pana = _.word('pana', {
  noun: 'understanding',
  verb: 'to understand',
  etym: () => [_.pa, _.na],
  desc: () =>
    `Borrowed and adapted from [paham](https://en.wiktionary.org/wiki/paham)`,
})

// === alt

export const onepana = _.alt('onepana', {
  glo: '1SI.*not*.**understand**',
  alt: () => _.pana,
})
