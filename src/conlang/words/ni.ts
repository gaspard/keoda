import * as _ from '.'

export const ni = _.word('ni', {
  prep: 'to',
  prefix: 'to (DAT)',
  glo: 'DAT',
  see: () => [_.prep],
  desc: () => `
In the same way that ${_.fu} might be written \`*\` as in \`*Jane\` someday, ${
    _.ni
  }
could be \`'Jane\` as to not destroy the names with the suffix.

Or maybe we can write ${_.phrase('does Jane', _.fu, _.Jane)} and ${_.phrase(
    'to Jane',
    _.ni,
    _.Jane
  )}
  `,
})
