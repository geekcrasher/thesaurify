import axios, { AxiosError } from "axios"

export const getWordDefinition = async (word: string) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

    return response?.data
  } catch (error) {
    const axiosError = error as AxiosError
    console.log(`Error fetching definition for "${word}":`, axiosError.message)
    throw error
  }
}