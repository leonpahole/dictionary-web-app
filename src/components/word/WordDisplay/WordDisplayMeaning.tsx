import Link from "next/link";
import { DictionaryModels } from "@/utils/dictionary/dictionary.models";

interface IProps {
  meaning: DictionaryModels.Meaning;
}
export const WordDisplayMeaning = ({ meaning }: IProps) => {
  return (
    <div className="mt-8 md:mt-10">
      <div className="flex items-center gap-4 md:gap-5">
        <h3 className="text-bm font-bold italic md:text-hm">
          {meaning.partOfSpeech}
        </h3>
        <hr className="w-full bg-gray-200 dark:bg-gray-400" />
      </div>
      <div className="mt-8 md:mt-10">
        <h3 className="text-hs-m text-gray-300 md:text-hs">Meaning</h3>
        <ul className="mt-4 list-inside list-disc text-bm-m marker:text-purple-100 md:ml-5.5 md:mt-6.25 md:text-bm">
          {meaning.definitions.map((definition) => (
            <li key={definition} className="mb-3.25 last:mb-0">
              {definition}
            </li>
          ))}
        </ul>
      </div>
      {meaning.synonyms.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-6 md:mt-10 md:gap-5.5 ">
          <h3 className="text-hs-m text-gray-300 md:text-hs">Synonims</h3>
          {meaning.synonyms.map((synonym) => (
            <Link
              className="text-hs-m font-bold text-purple-100 md:text-hs"
              href={`?word=${encodeURIComponent(synonym)}`}
            >
              {synonym}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
