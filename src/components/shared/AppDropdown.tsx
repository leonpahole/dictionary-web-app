import Image from "next/image";
import Dropdown from "react-dropdown";
import ArrowDown from "public/images/icon-arrow-down.svg";
import { DropdownModels } from "@/utils/dropdown/dropdown.models";
import "react-dropdown/style.css";

const optionClassName =
  "!bg-transparent !text-gray-500 dark:!text-white dark:hover:!text-purple-100 hover:!bg-transparent hover:!text-purple-100 !px-6 !py-2";

interface IProps {
  options: DropdownModels.Option[];
  value: string | undefined;
  onSelect(value: string): void;
  placeholder?: string;
}

export const AppDropdown = ({
  options,
  value,
  onSelect,
  placeholder,
}: IProps) => {
  const opts = DropdownModels.toLibOptions(options, optionClassName);

  return (
    <Dropdown
      options={opts}
      value={value}
      placeholder={placeholder}
      onChange={({ value: selectedValue }) => {
        onSelect(selectedValue);
      }}
      className="!font-bm !font-bold"
      controlClassName="!p-0 !bg-transparent !border-none !flex !items-center !justify-between !shadow-none !cursor-pointer !text-gray-500 dark:!text-white"
      menuClassName="!py-4 !rounded-2xl !w-47.75 !border-none !shadow-d dark:!shadow-p !mt-4.5 !right-0 dark:!bg-gray-600"
      arrowClosed={<Arrow open={false} />}
      arrowOpen={<Arrow open />}
    />
  );
};

const Arrow = ({ open }: { open: boolean }) => {
  return (
    <Image
      src={ArrowDown}
      alt=""
      className={`ml-4.5 mt-1 ${open ? "rotate-180" : ""}`}
      width="12"
      height="6"
    />
  );
};
