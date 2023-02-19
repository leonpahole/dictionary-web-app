import { DictionaryModels } from "@/utils/dictionary/dictionary.models";
import { Rest } from "@/utils/rest";

export namespace DictionaryApi {
  export const getWord = (word: string) => {
    return Rest.get<DictionaryModels.WordDto[]>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
  };
}
