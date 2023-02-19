import { WordDisplay } from "@/components/word/WordDisplay/WordDisplay";
import { WordNotFoundDisplay } from "@/components/word/WordNotFoundDisplay";
import { WordSearch } from "@/components/word/WordSearch/WordSearch";
import { DictionaryModels } from "@/utils/dictionary/dictionary.models";
import { DictionaryService } from "@/utils/dictionary/dictionary.service";
import { useState } from "react";

export const WordView = () => {
  const [word, setWord] = useState<DictionaryModels.Word | null | undefined>(
    undefined
  );

  const onSubmit = async (text: string) => {
    try {
      const result = await DictionaryService.getWord(text);
      setWord(result);
    } catch (e) {
      console.error(e);
      setWord(null);
    }
  };

  return (
    <>
      <WordSearch onSubmit={onSubmit} />
      {word && <WordDisplay word={word} />}
      {word === null && <WordNotFoundDisplay />}
    </>
  );
};
