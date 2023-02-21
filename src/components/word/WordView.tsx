import { WordDisplay } from "@/components/word/WordDisplay/WordDisplay";
import { WordNotFoundDisplay } from "@/components/word/WordNotFoundDisplay";
import { WordSearch } from "@/components/word/WordSearch/WordSearch";
import { DictionaryModels } from "@/utils/dictionary/dictionary.models";
import { DictionaryService } from "@/utils/dictionary/dictionary.service";
import Head from "next/head";
import { useEffect, useState } from "react";

interface IProps {
  word: DictionaryModels.Word | null | undefined;
  query: string | undefined;
}

export const WordView = ({ word: prefilledWord, query }: IProps) => {
  const [word, setWord] = useState<DictionaryModels.Word | null | undefined>(
    prefilledWord
  );

  useEffect(() => {
    setWord(prefilledWord);
  }, [prefilledWord]);

  const onSubmit = async (text: string): Promise<boolean> => {
    DictionaryService.addToQuery(text);
    const result = await DictionaryService.getWord(text);
    setWord(result);
    return result != null;
  };

  let title: string | null = null;
  if (word) {
    title = `${word.word} | Dictionary`;
  } else if (word === null) {
    title = `Not found | Dictionary`;
  }

  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <WordSearch onSubmit={onSubmit} query={query} />
      {word && <WordDisplay word={word} />}
      {word === null && <WordNotFoundDisplay />}
    </>
  );
};
