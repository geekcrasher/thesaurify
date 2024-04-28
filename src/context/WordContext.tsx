import React, { createContext, useState, useEffect, useContext } from "react";
import { getWordDefinition } from "@/api";
import { type Meaning } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast"
import { AxiosError } from "axios";


export type WordInfo = {
  word: string,
  phonetic?: string,
  phonetics: { audio?: string }[],
  sourceUrls: string[],
  meanings: Meaning[],
}

type WordContextType = {
  wordInfo: WordInfo | null,
  setKeyword: React.Dispatch<React.SetStateAction<string>>
  wordInfoData: WordInfo
}

const WordContext = createContext<WordContextType | null>(null)

export const useWord = () => {
  return useContext(WordContext) as WordContextType
}

export const WordContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [wordInfo, setWordInfo] = useState<WordInfo | null>(null)
  const [keyword, setKeyword] = useState('')

  const { toast } = useToast()

  useEffect(() => {
    const getWordInfo = async () => {
      if (keyword) {
        try {
          const response = await getWordDefinition(keyword)
          if (response && response[0]) {
            setWordInfo(response[0])
            sessionStorage.setItem('wordInfo', JSON.stringify(response[0]))
          }
        } catch (error: unknown) {
          if (error instanceof AxiosError) {
            console.log(error);
            toast({
              title: "Uh oh! Something went wrong.",
              description: `${error.response?.data?.message}`,
            })
          }
        }
      }
    }
    getWordInfo()
  }, [keyword, toast])

  const searchWordData = sessionStorage.getItem("wordInfo") || null
  const wordInfoData: WordInfo = searchWordData && JSON.parse(searchWordData)

  return (
    <WordContext.Provider value={{ wordInfo, setKeyword, wordInfoData }}>
      {children}
    </WordContext.Provider>
  )
}