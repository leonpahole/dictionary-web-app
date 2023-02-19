import IconSearch from "public/images/icon-search.svg";
import { useState } from "react";
import Image from "next/image";

interface IProps {
  onSubmit(word: string): void;
}

export const WordSearch = ({ onSubmit }: IProps) => {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const isValid = text.trim().length > 0;

  const onChange = (val: string) => {
    setError(null);
    setText(val);
  };

  const onSubmitClick = () => {
    if (!isValid) {
      setError("Whoops, can't be empty...");
      return;
    }

    onSubmit(text);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitClick();
      }}
    >
      <div className="relative">
        <input
          aria-label="Enter a word and press enter or the submit button to search."
          type="text"
          placeholder="Search for any word..."
          className={`w-full rounded-2xl bg-gray-100 py-3.5 px-6 text-bs font-bold placeholder-gray-500 placeholder-opacity-25 
          focus:outline focus:outline-1 
          focus:outline-purple-100 md:py-5 md:text-hs 
          ${error != null ? "outline outline-1 outline-red-100 " : ""}
          dark:bg-gray-600 dark:placeholder-white dark:placeholder-opacity-25`}
          aria-invalid={error == null}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          onClick={onSubmitClick}
          type="submit"
          className="absolute inset-y-0 right-6"
        >
          <Image src={IconSearch} alt="Submit search" height="16" width="16" />
        </button>
      </div>
      <div role="alert" className="mt-2 text-hs text-red-100">
        {error}
      </div>
    </form>
  );
};
