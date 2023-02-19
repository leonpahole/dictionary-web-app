import { AppToggle } from "@/components/shared/AppToggle";
import { withClientOnly } from "@/components/shared/withClientOnly";
import { useTheme } from "@/providers/ThemeContext";
import Image from "next/image";

import IconMoonPurple from "public/images/icon-moon-purple.svg";
import IconMoon from "public/images/icon-moon.svg";

export const ColorSchemeSwitcher = withClientOnly(() => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <AppToggle
      isChecked={isDarkMode}
      onToggle={toggleDarkMode}
      label={
        <Image
          src={isDarkMode ? IconMoonPurple : IconMoon}
          alt={`Turn dark mode ${isDarkMode ? "off" : "on"}`}
          width="20"
          height="20"
          className="ml-3 md:ml-5"
          color="red"
        />
      }
    />
  );
});
