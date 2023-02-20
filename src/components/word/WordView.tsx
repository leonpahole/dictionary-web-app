import { WordDisplay } from "@/components/word/WordDisplay/WordDisplay";
import { WordNotFoundDisplay } from "@/components/word/WordNotFoundDisplay";
import { WordSearch } from "@/components/word/WordSearch/WordSearch";
import { DictionaryModels } from "@/utils/dictionary/dictionary.models";
import { DictionaryService } from "@/utils/dictionary/dictionary.service";
import { useEffect, useState } from "react";

interface IProps {
  word: DictionaryModels.Word | null | undefined;
}

export const WordView = ({ word: prefilledWord }: IProps) => {
  const [word, setWord] = useState<DictionaryModels.Word | null | undefined>(
    prefilledWord
  );

  useEffect(() => {
    setWord(prefilledWord);
  }, [prefilledWord]);

  const onSubmit = async (text: string) => {
    DictionaryService.addToQuery(text);
    const result = await DictionaryService.getWord(text);
    setWord(result);
  };

  return (
    <>
      <WordSearch onSubmit={onSubmit} word={word} />
      {word && <WordDisplay word={word} />}
      {word === null && <WordNotFoundDisplay />}
    </>
  );
};
