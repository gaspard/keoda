import * as _ from '.'

export const jom = _.word('jom', {
  noun: 'group, family',
})

export const jana = _.word('jana', {
  noun: 'forest',
})

export const janaro = _.alt('janaro', {
  glo: '**forest**.INESS',
  alt: () => _.jana,
})
