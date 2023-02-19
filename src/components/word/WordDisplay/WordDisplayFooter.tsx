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
      <hr className="mt-10 mb-5 w-full bg-gray-200 dark:bg-gray-400" />
      <div className="flex flex-wrap gap-5">
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
