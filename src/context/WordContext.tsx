import React, { createContext, useState, useEffect, useContext } from "react";
import { getWordDefinition } from "@/api";
import { type Meaning } from "@/lib/types";


export type WordInfo = {
  word: string,
  phonetic?: string,
  phonetics: { audio?: string }[],
  sourceUrls: string[],
  meanings: Meaning[],
}

type WordContextType = {
  wordInfo: WordInfo | null,
  keyword: string,
  setKeyword: React.Dispatch<React.SetStateAction<string>>
}

const WordContext = createContext<WordContextType | null>(null)


export const useWord = () => {
  return useContext(WordContext) as WordContextType
}

export const WordContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [wordInfo, setWordInfo] = useState<WordInfo | null>(null)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    const getWordInfo = async () => {
      if (keyword) {
        try {
          const response = await getWordDefinition(keyword)
          if (response && response[0]) {
            setWordInfo(response[0])
            console.log(response[0])
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    getWordInfo()
  }, [keyword])

  return (
    <WordContext.Provider value={{ wordInfo, keyword, setKeyword }}>
      {children}
    </WordContext.Provider>
  )
}