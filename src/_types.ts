interface Example {
  phrase: Word []
  meaning: string
}

interface FullWord {
  adj: string
  body: string | string []
  desc: string
  examples: Example[]
  lang: string | string []
  position: string
  verb: string | string []
}

export type Word = Partial<FullWord>