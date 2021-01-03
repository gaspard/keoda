import * as _ from '..'

export const food = _.card('food', {
  lang: 'Food',
  desc: () => `

See also ${_.fruits}.

* peas ${_.piule}

`,
})
