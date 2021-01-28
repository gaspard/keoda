import * as _ from '.'

export const we = _.word('we', {
  suff: 'right',
  see: () => [_.no, _.se, _.du],
})
