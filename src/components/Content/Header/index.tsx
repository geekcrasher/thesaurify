import { useWord } from "@/context/WordContext";
import { Play, Pause } from "lucide-react";

type HeaderProps = {
  mp3Source?: { audio?: string }[]
  isAudioPlay: boolean
  onClick: () => void
}

const Header = ({ isAudioPlay, mp3Source, onClick }: HeaderProps) => {

  const { wordInfoData } = useWord()

  return (
    <>
      <header className="flex items-center justify-between">
        {wordInfoData && (
          <section className="space-y-2">
            <h2 className="text-4xl 2xl:text-[2.75rem] font-bold font-lora">{wordInfoData.word}</h2>
            <p className="text-xl 2xl:text-2xl text-[#b23fea]">{wordInfoData.phonetic}</p>
          </section>
        )}
        {(mp3Source && mp3Source?.length > 0) && (
          <button
            onClick={onClick}
            className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-full text-[#b23fea] bg-[#f0d9fb]"
          >
            {isAudioPlay ? <Pause fill="#b23fea" size={18} /> : <Play fill="#b23fea" size={18} />}
          </button>
        )}
      </header>
    </>
  );
}

export default Header;