import * as _ from '../words'

export const family = _.card('family', {
  writ: 'family',
  desc: () => `
# Parents and siblings

To understand family, you need to have a 3D view of space in the language.
Imagine that you are looking forward. You have the spatial directions as
follow (yes it looks like a person looking south "sud").

|          | front   |        |
| :-:      | :-:     | :-:    |
|          | ${_.du} |        |
| ${_.es} |  🥰     | ${_.we} |
|          | ${_.no} |        |
|          | back    |        |

On a vertical plane:

| up / far |
| :-:     |
| ${_.ha} |
|    🥰    |
| ${_.jo} |
| down / close |

Imagine your family standing around you:

* In front of you, your younger siblings ${_.duda}.
* Behind you, your elder siblings ${_.noda}
* On the sides your friends ${_.adu}

On the vertical plane:

* Above you, your parents: ${_.hada}
* Below you, your children: ${_.joda}

And now all these terms can be cased with one of the three genders:

* ${_.iwi} (bird)
* ${_.ana} (tree)
* ${_.oto} (wind)

## ${_.hida} (siblings)

|           | ${_.ana} | ${_.iwi} | ${_.oto} |
| :----     | :------: | :------: | :-------: |
| ${_.duda} | ${_.duna}| ${_.duwi}| ${_.duto} |
| ${_.hida} | ${_.hina}| ${_.hiwi}| ${_.hito} |
| ${_.noda} | ${_.nona}| ${_.nowi}| ${_.noto} |

If you just need quick terms (without the notion of being
younger or elderly):

* ${_.hida} (sister)
* ${_.hiwi} (enby sibling)
* ${_.hito} (brother)

## ${_.hada} (parent) / ${_.joda} (child)

|           | ${_.ana} | ${_.iwi} | ${_.oto} |
| :----     | :------: | :------: | :-------: |
| ${_.hada} | ${_.hana}| ${_.hawi}| ${_.hato} |
| ${_.joda} | ${_.jona}| ${_.jowi}| ${_.joto} |

And of course, you can be creative in the same way genders
can blend:

* ${_.phrase('girl-boy child', _.jonato)}
* ${_.phrase('enby-girl child', _.jowina)}
* etc

`,
})
