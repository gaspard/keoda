import * as _ from '../words'

export const food = _.card('food', {
  writ: 'food',
  desc: () => `
# Food

See also ${_.fruits}.

* ${_.nounRef(_.piule)}
* ${_.nounRef(_.egina)}
* ${_.nounRef(_.fena)}
* ${_.nounRef(_.piutaj)}
* ${_.nounRef(_.ulul)}
* ${_.nounRef(_.piuna)}
* ${_.nounRef(_.eri)}
* ${_.nounRef(_.palajil)}
* ${_.nounRef(_.pantame)}
* ${_.nounRef(_.wiyon)}
* ${_.nounRef(_.gopona)}
* ${_.nounRef(_.pona)}
* ${_.nounRef(_.ponale)}

`,
})
