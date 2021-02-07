import * as _ from '../lang'

export const plants = _.card('plants', {
  writ: 'plants',
  desc: () => `
# Plants

The word for "plant" is ${_.ina}, the caressing thing. Note that not all
plants have the ${_.ina} suffix.

See also ${_.food}, ${_.fruits} and ${_.seasons}.

This is the list of words related to plants currently in the language:

* ${_.nounRef(_.bisahina)}
* ${_.nounRef(_.ana)}
* ${_.nounRef(_.ananoa)}
* ${_.nounRef(_.anama)}
* ${_.nounRef(_.anarum)}
* ${_.nounRef(_.anasame)}
* ${_.nounRef(_.buni)}
* ${_.nounRef(_.soaji)}

## Specific plant names

* ${_.nounRef(_.okana)}

`,
})
