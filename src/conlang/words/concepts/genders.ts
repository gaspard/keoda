import * as _ from '..'

export const genders = _.card('genders', {
  adj: 'genders',
  desc: () => `
Keoda does not have mandatory gender for conjugation or pronouns but the notion still exists as the following adjectives:

* ${_.ana} (tree / feminine)
* ${_.iwi} (bird / non-binary)
* ${_.oto} (wind / masculine)

And as with all adjecives, they can be combined:

* ${_.anoto}
* ${_.aniwi}
* ${_.iwana}
* ${_.iwoto}
* ${_.otana}
* ${_.otiwi}

Your next read: ${_.pron} (pronouns)
`,
})
