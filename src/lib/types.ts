
type Definition = {
  definition: string,
  example?: string
}

export type Meaning = {
  definitions: Definition[],
  partOfSpeech: string,
  synonyms: string[]
}