import Image from "next/image";
import Link from "next/link";

import IconNewWindow from "public/images/icon-new-window.svg";

interface IProps {
  sources: string[];
}

export const WordDisplayFooter = ({ sources }: IProps) => {
  if (sources.length === 0) {
    return null;
  }

  return (
    <div>
      <hr className="mt-8 mb-6 w-full bg-gray-200 dark:bg-gray-400 md:mb-5 md:mt-10" />
      <div className="gap flex flex-col flex-wrap gap-2 md:flex-row md:gap-5">
        <h3 className="text-bs text-gray-300 underline">Source</h3>
        {sources.map((source) => (
          <Link
            target="_blank"
            href={source}
            className="flex items-center text-bs"
          >
            <span className="underline">{source}</span>
            <Image
              src={IconNewWindow}
              alt=""
              className="ml-2.25"
              height="12"
              width="12"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
