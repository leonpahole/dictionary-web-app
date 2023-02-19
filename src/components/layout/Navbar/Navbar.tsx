import { ColorSchemeSwitcher } from "@/components/layout/Navbar/ColorSchemeSwitcher";
import { FontSwitcher } from "@/components/layout/Navbar/FontSwitcher";
import Image from "next/image";
import Logo from "public/images/logo.svg";

export const Navbar = () => {
  return (
    <header className="mb-12.875 flex items-stretch justify-between">
      <Image src={Logo} alt="" width="32" height="36.5" />

      <div className="flex items-center">
        <FontSwitcher />
        <div className="mx-6.5 h-8 w-px bg-gray-200 dark:bg-white" />
        <ColorSchemeSwitcher />
      </div>
    </header>
  );
};
