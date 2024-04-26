import { useWord } from "@/context/WordContext";
import { Play, Pause } from "lucide-react";

type HeaderProps = {
  mp3Source?: { audio?: string }[]
  isAudioPlay: boolean
  onClick: () => void
}

const Header = ({ isAudioPlay, mp3Source, onClick }: HeaderProps) => {

  const { wordInfo } = useWord()

  return (
    <>
      <header className="flex items-center justify-between">
        {wordInfo && (
          <section className="space-y-1">
            <h2 className="text-[2.75rem] font-bold font-lora">{wordInfo.word}</h2>
            <p className="text-2xl text-[#b23fea]">{wordInfo.phonetic}</p>
          </section>
        )}
        {(mp3Source && mp3Source?.length > 0) && (
          <button
            onClick={onClick}
            className="flex justify-center items-center w-12 h-12 rounded-full text-[#b23fea] bg-[#f0d9fb]"
          >
            {isAudioPlay ? <Pause fill="#b23fea" size={18} /> : <Play fill="#b23fea" size={18} />}
          </button>
        )}
      </header>
    </>
  );
}

export default Header;