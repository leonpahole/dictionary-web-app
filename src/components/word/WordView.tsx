import { WordDisplay } from "@/components/word/WordDisplay/WordDisplay";
import { WordNotFoundDisplay } from "@/components/word/WordNotFoundDisplay";
import { WordSearch } from "@/components/word/WordSearch/WordSearch";
import { DictionaryModels } from "@/utils/dictionary/dictionary.models";
import { DictionaryService } from "@/utils/dictionary/dictionary.service";
import { useState } from "react";

interface IProps {
  word: DictionaryModels.Word | null | undefined;
}

export const WordView = ({ word: prefilledWord }: IProps) => {
  const [word, setWord] = useState<DictionaryModels.Word | null | undefined>(
    undefined
  );

  const onSubmit = async (text: string) => {
    DictionaryService.addToQuery(text);
    const result = await DictionaryService.getWord(text);
    setWord(result);
  };

  const actualWord = word !== undefined ? word : prefilledWord;

  return (
    <>
      <WordSearch onSubmit={onSubmit} />
      {actualWord && <WordDisplay word={actualWord} />}
      {actualWord === null && <WordNotFoundDisplay />}
    </>
  );
};
