import { DictionaryApi } from "@/utils/dictionary/dictionary.api";
import { DictionaryModels } from "@/utils/dictionary/dictionary.models";

export namespace DictionaryService {
  export const getWord = async (
    word: string
  ): Promise<DictionaryModels.Word | null> => {
    try {
      const words = await DictionaryApi.getWord(word);
      const wordResult = DictionaryModels.fromWordDtos(words);
      if (wordResult == null) {
        throw new Error("No definition found.");
      }

      return wordResult;
    } catch (e) {
      console.error("Get word error", e);
    }

    return null;
  };

  export const addToQuery = (word: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("word", word);

    window.history.pushState({ path: url.toString() }, "", url.toString());
  };
}
