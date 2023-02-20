import { WordDisplayFooter } from "@/components/word/WordDisplay/WordDisplayFooter";
import { WordDisplayHeader } from "@/components/word/WordDisplay/WordDisplayHeader";
import { WordDisplayMeaning } from "@/components/word/WordDisplay/WordDisplayMeaning";
import { DictionaryModels } from "@/utils/dictionary/dictionary.models";

interface IProps {
  word: DictionaryModels.Word;
}

export const WordDisplay = ({ word }: IProps) => {
  return (
    <article className="mt-7 md:mt-11.25">
      <WordDisplayHeader word={word} />
      {word.meanings.map((meaning, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <WordDisplayMeaning key={`${meaning}_${i}`} meaning={meaning} />
      ))}
      <WordDisplayFooter sources={word.sources} />
    </article>
  );
};
