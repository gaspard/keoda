import * as _ from '../lang'

const moods = _.card('moods', {
  noun: '',
  desc: () => `
| suffix | mood |
| :---------- | :---------- |
| ${_.i} | ${_.gloss(_.i$)} |
| ${_.u} | ${_.gloss(_.u$)} |
| ${_.o} | ${_.gloss(_.o$)} |
| ${_.a} | ${_.gloss(_.a$)} |
| ${_.y} | ${_.gloss(_.y$)} |
`,
})

const rain = _.alt('gai', {
  noun: 'rain',
  verb: 'to rain',
  adj: 'gentle',
  adv: 'carefully',
  etym: () => [_.ga, _.i$],
  alt: () => _.gai,
})

export const videos = _.card('videos', {
  noun: 'Video presentations on zulapa',
  open: true,
  desc: () => `
### [lesson #1](https://www.tiktok.com/@annaishq/video/7199206889111014661) _(TikTok - 2023-02-12)_

${_.zu}, ${_.la} and ${_.zulapa}

### [lesson #2]() _(TikTok - 2023-02-18)_

${_.ma}, and the suffixes ${_.i$}, ${_.o$}, ${_.u$}, ${_.a$} and ${_.y$}

${_.caption('hello hello !', 'hello hello', _.yogi, _.yogi)}

${_.caption('today we are talking about', '')}

${_.caption('the hand **ma**', '', _.ma)}

${_.caption('and and new word for the heart', '')}

${_.caption('which is **au**', '', _.au)}

${_.caption('and we have markers for verbs', '', moods)}

${_.caption('that let us change when they mean.', '', moods)}

${_.caption('so if we add **i**, caressing.', '', _.i$)}

${_.caption('to the hand **ma**', '', _.ma)}

${_.caption('we get **mali**', 'to caress', _.ma.i$)}

${_.caption('or **mi**', '', _.mi)}

${_.caption('and **mi** is "to caress"', '', _.mi)}

${_.caption('so, "caress my heart" is', '')}

${_.caption('**mi au**', 'Give me a hug', _.mi.imp, _.au)}

${_.caption("that's **mi au**, that means", 'Give me a hug', _.mi.imp, _.au)}

${_.caption('"give me a hug"', 'Give me a hug', _.mi.imp, _.au)}

${_.caption('"give me a hug" is **mi au**', 'Give me a hug', _.mi.imp, _.au)}

${_.caption('and you learned **la** for "lips"', '', _.la)}

${_.caption('last time. *la* is the verb "to kiss"', '', _.la)}

${_.caption('"kiss me gently" would be **lali**', '', _.la.i$)}

${_.caption(
  'and **lali la**, "give me a gentle kiss"',
  'Give me a gentle kiss',
  _.la.i$,
  _.la
)}

${_.caption('bye !', 'Goodbye', _.odogi)}

### [lesson #3]() _(TikTok - 2023-02-25)_

${_.ga}, and ${_.gai}

${_.caption('hello hello', '', _.pagi)}

${_.caption('today we are going to talk about', '')}

${_.caption('a very beautiful word', '')}

${_.caption('which is "rain"', '')}

${_.caption('and to introduce rain, I will', '')}

${_.caption('first talk about **ga**', '', _.ga)}

${_.caption('**ga** is the spirit of things', '', _.ga)}

${_.caption('the "mood", you know, the', '', _.ga)}

${_.caption('"what feels here"', '')}

${_.caption('and **gana** is actually', '', _.gana)}

${_.caption('"the earth"', '', _.gana)}

${_.caption("it's the big spirit of things", '', _.gana)}

${_.caption('"the" place spirit-thing.', '', _.gana)}

${_.caption('we saw last time that we can', '')}

${_.caption('add "mood" markers to', '', moods)}

${_.caption('verbs to transform their meaning', '', moods)}

${_.caption('and **i** is the caressing mood', '', _.i$)}

${_.caption('so **gai** is the', 'caressing spirit', _.ga.i$)}

${_.caption('"caressing spirit"', 'caressing spirit', _.ga.i$)}

${_.caption("it's the rain", '', rain)}

${_.caption('falling on the earth,', '', rain)}

${_.caption('caressing the earth', '', rain)}

${_.caption('but since **ga** is also "spirit"', '', _.ga)}

${_.caption('**gai** also means "consciousness"', '', _.gai)}

${_.caption('"feeling"...', '', _.gai)}

${_.caption('"feeling"... feeling', '', _.gai)}

${_.caption('so **gai** is "the rain" and it\'s', '', _.gai)}

${_.caption('also "feeling", "consciousness"', '', _.gai)}

${_.caption('bye!', '', _.odogi)}

`,
})
