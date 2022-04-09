import * as _ from '../lang'

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
| ${_.se}  |  🥰     | ${_.we} |
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
* ${_.unu} (tree)
* ${_.ofo} (wind)

## ${_.hida} (siblings)

|           | ${_.unu} | ${_.iwi} | ${_.ofo} |
| :----     | :------: | :------: | :-------: |
| ${_.duda} | ${_.dunu}| ${_.duwi}| ${_.dufo} |
| ${_.hida} | ${_.hinu}| ${_.hiwi}| ${_.hifo} |
| ${_.noda} | ${_.nonu}| ${_.nowi}| ${_.nofo} |

If you just need quick terms (without the notion of being
younger or elderly):

* ${_.hinu} (sister)
* ${_.hiwi} (enby sibling)
* ${_.hifo} (brother)

## ${_.hada} (parent) / ${_.joda} (child)

|           | ${_.unu}  | ${_.iwi}  | ${_.ofo}  |
| :----     | :------:  | :------:  | :-------: |
| ${_.hada} | ${_.hanu} | ${_.hawi} | ${_.hafo} |
| ${_.joda} | ${_.jonu} | ${_.jowi} | ${_.joto} |

`,
})
