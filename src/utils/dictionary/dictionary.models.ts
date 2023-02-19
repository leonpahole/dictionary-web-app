export namespace DictionaryModels {
  export interface Word {
    word: string;
    phonetic: string | null;
    audioUrl: string | null;
    meanings: Meaning[];
    sources: string[];
  }

  export interface Meaning {
    partOfSpeech: string;
    definitions: string[];
    synonyms: string[];
  }

  export const fromWordDtos = (words: WordDto[]): Word | null => {
    if (!words || words.length === 0) {
      return null;
    }

    const word = words[0];

    const getAudioUrl = () => {
      const audio = word.phonetics.find(
        (p) => p.audio != null && p.audio.trim().length > 0
      );

      if (audio == null) {
        return null;
      }

      return audio.audio!;
    };

    const getPhonetic = () => {
      const text = word.phonetics.find(
        (p) => p.text != null && p.text.trim().length > 0
      );

      if (text == null) {
        return null;
      }

      return text.text!;
    };

    return {
      word: word.word,
      audioUrl: getAudioUrl(),
      phonetic: getPhonetic(),
      meanings: word.meanings.map((meaning) => {
        return {
          partOfSpeech: meaning.partOfSpeech,
          synonyms: meaning.synonyms ?? [],
          definitions: meaning.definitions.map(
            (definition) => definition.definition
          ),
        };
      }),
      sources: word.sourceUrls ?? [],
    };
  };

  export interface WordDto {
    word: string;
    phonetics: PhoneticDto[];
    origin: string;
    meanings: MeaningDto[];
    sourceUrls?: string[];
  }

  export interface PhoneticDto {
    text?: string;
    audio?: string;
  }

  export interface MeaningDto {
    partOfSpeech: string;
    definitions: DefinitionDto[];
    synonyms?: string[];
  }

  export interface DefinitionDto {
    definition: string;
    example: string;
    synonyms: any[];
    antonyms: any[];
  }
}
