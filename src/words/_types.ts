interface Example {
  phrase: PWord []
  meaning: string
}

interface DescriptionFunction {
  (): string
}

interface ExamplesFunction {
  (): Example []
}

interface FullWord {
  name: string
  adj: string
  body: string
  desc: DescriptionFunction
  examples: ExamplesFunction
  lang: string
  position: string
  prefix: string
  suffix: string
  verb: string
}

interface Word extends PWord {
  name: string
}

interface WordByName {
  [ key: string ]: Word
}

type PWord = Partial<FullWord>

export const words: WordByName = {}

function show ( w: Word ): () => string {
  return function () {
    return w.name
  }
}
export function word
( name: string
, theWord: PWord
): Word {
  const word: Word = { name, ... theWord }
  words [ name ] = word
  word.toString = show ( word )
  return word
}

function showExamples
( examples?: Example []
) : void {
  if ( !examples ) {
    return
  }
  console.log
  ( examples.map
    ( e => e.phrase.map ( w => w.name ).join ( ' ' ) ).join ( ', ' )
  )
}

export function printWords () {
  Object.keys ( words ).sort ().forEach
  ( name => {
      const { desc, examples } = words [ name ]
      console.log ( name ) // , desc ? desc () : '' )
      if ( examples ) {
        showExamples ( examples () )
      }
    }
  )
}
