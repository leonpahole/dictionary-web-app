import { DictionaryApi } from "@/utils/dictionary/dictionary.api";
import { DictionaryModels } from "@/utils/dictionary/dictionary.models";

export namespace DictionaryService {
  export const getWord = async (
    word: string
  ): Promise<DictionaryModels.Word> => {
    const words = await DictionaryApi.getWord(word);
    const wordResult = DictionaryModels.fromWordDtos(words);
    if (wordResult == null) {
      throw new Error("No definition found.");
    }

    return wordResult;
  };
}
