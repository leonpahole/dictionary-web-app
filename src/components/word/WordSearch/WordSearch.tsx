import IconSearch from "public/images/icon-search.svg";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface IProps {
  onSubmit(word: string): Promise<boolean>;
  query: string | undefined;
}

export const WordSearch = ({ onSubmit, query }: IProps) => {
  const [text, setText] = useState<string>(query ?? "");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isValid = text.trim().length > 0;

  const isDirty = useRef<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // prefill word
  useEffect(() => {
    if (!query) {
      return;
    }

    setText(query);
  }, [query]);

  const onChange = (val: string) => {
    setError(null);
    setText(val);
    isDirty.current = true;
  };

  const onSubmitClick = async () => {
    if (isSubmitting) {
      return;
    }

    if (!isValid) {
      setError("Whoops, can't be empty...");
      return;
    }

    try {
      setIsSubmitting(true);
      const isSuccess = await onSubmit(text);

      if (isSuccess) {
        inputRef.current?.blur();
      }
    } finally {
      setIsSubmitting(false);
    }
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
          value={text}
          onChange={(e) => onChange(e.target.value)}
          ref={inputRef}
        />
        <button
          onClick={onSubmitClick}
          disabled={isSubmitting}
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
