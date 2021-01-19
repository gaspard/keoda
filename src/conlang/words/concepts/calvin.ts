import * as _ from '..'

export const calvin = _.card('calvin', {
  desc: () => `
# Calvin and Hobbes

From [/r/conlangs](https://www.reddit.com/r/conlangs/comments/kzz8h8/translate_this_in_your_conlangs_bonus_points_if/)

![calvin.png](/calvin.png)

* Hobbes: ${_.phrase(
    "Shouldn't we read the instructions ?",
    _.eja,
    _.shokuru,
    _.fatan,
    _.pasuna,
    _.q
  )}
* Calvin: ${_.phrase(
    'Do I look like a Sissy ?',
    _.eja,
    _.okeihawi,
    _.si,
    _.loda,
    _.q
  )}
`,
})
