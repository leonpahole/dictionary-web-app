import { WordDisplayFooter } from "@/components/word/WordDisplay/WordDisplayFooter";
import { WordDisplayHeader } from "@/components/word/WordDisplay/WordDisplayHeader";
import { WordDisplayMeaning } from "@/components/word/WordDisplay/WordDisplayMeaning";
import { DictionaryModels } from "@/utils/dictionary/dictionary.models";

interface IProps {
  word: DictionaryModels.Word;
}

export const WordDisplay = ({ word }: IProps) => {
  return (
    <article className="mt-11.25">
      <WordDisplayHeader word={word} />
      {word.meanings.map((meaning) => (
        <WordDisplayMeaning meaning={meaning} />
      ))}
      <WordDisplayFooter sources={word.sources} />
    </article>
  );
};
