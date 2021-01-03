import * as _ from '..'

export const family = _.card('family', {
  lang: 'Parents and siblings',
  desc: () => `

To understand family, you need to have a 3D view of space in
the language. Imagine that the person ${_.oda} is looking
forward (up, at this paragraph). We have the spatial
directions as follow (yes it looks like a person looking
south "sud").

|         | front   |      |
| :-:     | :-:     | :-:  |
|         | ${_.du} |      |
| ${_.es} |  🥰    | ${_.we} |
|         | ${_.no} |      |
|         | back    |      |

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

* ${_.iwi}
* ${_.ana}
* ${_.oto}

## Siblings ${_.hida}

|           | ${_.ana} | ${_.iwi} | ${_.oto} |
| :----     | :------: | :------: | :-------: |
| ${_.duda} | ${_.duna}| ${_.duwi}| ${_.duto} |
| ${_.hida} | ${_.hina}| ${_.hiwi}| ${_.hito} |
| ${_.noda} | ${_.nona}| ${_.nowi}| ${_.noto} |

If you just need quick terms (without the notion of being
younger or elderly):

* sister: ${_.hida}
* enby sibling: ${_.hiwi}
* brother: ${_.hito}

## Parent ${_.hada} / children ${_.joda}

|           | ${_.ana} | ${_.iwi} | ${_.oto} |
| :----     | :------: | :------: | :-------: |
| ${_.hada} | ${_.hana}| ${_.hawi}| ${_.hato} |
| ${_.joda} | ${_.jona}| ${_.jowi}| ${_.joto} |

And of course, you can be creative in the same way genders
can blend:

* ${_.phrase('daughter-boy', _.jonato)}
* ${_.phrase('enby child-girl', _.jowina)}
* etc
`,
})
