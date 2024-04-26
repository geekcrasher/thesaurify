import { useCallback, useState } from "react";
import { useWord } from "@/context/WordContext";
import { mp3Audio } from "@/lib/mp3Audio";
import Meaning from "./Meaning";
import { SquareArrowOutUpRight } from "lucide-react";
import Header from "./Header";


const WordContent = () => {

  const { wordInfo, keyword } = useWord()
  const [isAudioPlay, setIsAudioPlay] = useState(false)

  const wordSourceUrl = wordInfo && wordInfo.sourceUrls.filter(url => url.endsWith(keyword))
  const mp3Source = wordInfo?.phonetics.filter(source => source?.audio !== "")

  const playAudio = useCallback(() => {
    mp3Audio({ source: mp3Source, setState: setIsAudioPlay })
  }, [mp3Source])

  return (
    <>
      <section className="h-full mt-4">
        {wordInfo && (
          <Header
            mp3Source={mp3Source}
            onClick={playAudio}
            isAudioPlay={isAudioPlay}
          />
        )}
        <section className="mt-6 space-y-4">
          {wordInfo && wordInfo.meanings.map((word, index) => (
            <Meaning word={word} key={index} />
          ))}

          {wordInfo && (
            <>
              <hr />
              <section className=" sm:flex item-center text-[0.8rem] sm:space-x-3 space-y-2 sm:space-y-0">
                <p className="text-gray-500 ">Source: </p>
                <a href={`${wordInfo.sourceUrls[0]}`} target="_blank" className="flex items-center underline underline-offset-4 gap-1 font-medium text-black/90">
                  {wordSourceUrl}
                  {wordSourceUrl && <SquareArrowOutUpRight className="w-3 h-3 text-gray-500" />}
                </a>
              </section>
            </>
          )}
        </section>
      </section>
    </>
  );
}

export default WordContent;