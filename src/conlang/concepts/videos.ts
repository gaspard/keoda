import * as _ from '../lang'

export const videos = _.card('videos', {
  noun: 'Video presentations on zulapa',
  open: true,
  desc: () => `
### [lesson #1](https://www.tiktok.com/@annaishq/video/7199206889111014661) _(TikTok - 2023-02-12)_

${_.caption('hello hello !', 'hello hello', _.yogi, _.yogi)}

${_.caption('the first word for today', '')}

${_.caption('is **zu**', '', _.zu)}

Presenting ${_.zu}, ${_.la} and ${_.zulapa}

`,
})
