import * as _ from '.'

export const jom = _.word('jom', {
  def: 'group, family',
})

export const jana = _.word('jana', {
  def: 'forest',
})

export const janaro = _.alt('janaro', {
  glo: '**forest**.INESS',
  alt: () => _.jana,
})
