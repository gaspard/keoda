import * as _ from '../words'

export const fruits = _.card('fruits', {
  writ: 'fruits',
  desc: () => `
Existing fruits are:

* ${_.nounRef(_.eri)}
* ${_.nounRef(_.pona)}
* ${_.nounRef(_.ponale)}
* ${_.nounRef(_.palajil)}
* ${_.nounRef(_.pantame)}
* ${_.nounRef(_.wiyon)}
* ${_.nounRef(_.gopona)}
* ${_.nounRef(_.guyuina)}

`,
})
