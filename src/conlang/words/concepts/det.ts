import * as _ from '..'

export const det = _.card('det', {
  lang: 'determinant',
  desc: () => `
Belonging is expressed with affix ${_.to} (mine/ours), ${_.ti} (yours), ${
    _.ta
  } (theirs), ${_.tei} (your HONOR), ${_.tiyi}, ${_.tilo} (your DPRV) or with
${_.wu} (of).

${_.wu} is only a suffix and we expect the possessor to be expressed. ${
    _.to
  }, ${_.ti}, ${_.ta} can be
used as prefix or suffix depending on what sounds best and user preferences. The difference is a bit like
saying "your hand" or "hand of you". This lets put emphasis where we want, like dropping the ${
    _.ti
  } of ${_.noati}
gently after a small pausee to express kindness or awe.

${_.phrase('My body is being caressed.', _.odato, _.zami)}

${_.phrase('My/our hand covers your skin.', _.toma, _.afe, _.noati)}
`,
})
