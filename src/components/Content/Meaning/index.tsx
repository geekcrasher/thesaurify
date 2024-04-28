import { type Meaning } from "@/lib/types";

type MeaningProps = {
  word: Meaning,
}

const Meaning = ({ word }: MeaningProps) => {
  return (
    <article>
      <section className="space-y-6">
        <h2 className="flex items-center gap-8 text-lg font-semibold font-lora italic">
          {word.partOfSpeech}
          <p className="w-full h-[0.1px] bg-gray-200/80"></p>
        </h2>
        <p className="text-gray-400">Meaning</p>
      </section>
      <ul className="list-disc list-outside space-y-4 mt-4">
        {word.definitions.map((keyword, index) => {
          return (
            <li key={index} className="ml-8 text-black text-[0.9rem] font-inter marker:text-[#b23fea] marker:text-xs">
              {keyword.definition}
              {keyword.example && <span className="block mt-2 text-gray-500/70">"{keyword?.example}"</span>}
            </li>
          )
        })}
      </ul>
      <section className="flex items-center gap-4 mt-8 mb-6">
        {word.synonyms?.length > 0 && <p className="text-gray-400">Synonyms</p>}
        <p className="font-bold text-[#b23fea]">{word.synonyms?.join(", ")}</p>
      </section>
    </article>
  );
}

export default Meaning;