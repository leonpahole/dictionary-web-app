import Link from "next/link";
import { DictionaryModels } from "@/utils/dictionary/dictionary.models";

interface IProps {
  meaning: DictionaryModels.Meaning;
}
export const WordDisplayMeaning = ({ meaning }: IProps) => {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-5">
        <h3 className="text-hm font-bold italic">{meaning.partOfSpeech}</h3>
        <hr className="w-full bg-gray-200 dark:bg-gray-400" />
      </div>
      <div className="mt-10">
        <h3 className="text-hs text-gray-300">Meaning</h3>
        <ul className="mt-6.25 ml-5.5 list-inside list-disc marker:text-purple-100">
          {meaning.definitions.map((definition) => (
            <li key={definition} className="mb-3.25 last:mb-0">
              {definition}
            </li>
          ))}
        </ul>
      </div>
      {meaning.synonyms.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-5.5">
          <h3 className="text-hs text-gray-300">Synonims</h3>
          {meaning.synonyms.map((synonym) => (
            <Link className="text-hs font-bold text-purple-100" href={synonym}>
              {synonym}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
