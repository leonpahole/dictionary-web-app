import { PlaySoundButton } from "@/components/shared/PlaySoundButton";
import { DictionaryModels } from "@/utils/dictionary/dictionary.models";

interface IProps {
  word: DictionaryModels.Word;
}

export const WordDisplayHeader = ({ word }: IProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="mb-2 text-hl-m font-bold md:text-hl">{word.word}</h1>
        {word.phonetic && (
          <h2 className="text-bm text-purple-100 md:text-hm">
            {word.phonetic}
          </h2>
        )}
      </div>
      {word.audioUrl && <PlaySoundButton audioUrl={word.audioUrl} />}
    </div>
  );
};
