import { ColorSchemeSwitcher } from "@/components/layout/Navbar/ColorSchemeSwitcher";
import { FontSwitcher } from "@/components/layout/Navbar/FontSwitcher";
import Image from "next/image";
import Logo from "public/images/logo.svg";

export const Navbar = () => {
  return (
    <header className="mb-6 flex items-stretch justify-between md:mb-12.875">
      <Image
        src={Logo}
        alt=""
        width="32"
        height="36"
        className="h-8 w-7 md:h-9 md:w-8"
      />

      <div className="flex items-center">
        <FontSwitcher />
        <div className="mx-4 h-8 w-px bg-gray-200 dark:bg-white md:mx-6.5" />
        <ColorSchemeSwitcher />
      </div>
    </header>
  );
};
