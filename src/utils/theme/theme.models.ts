import { PageWrapperId } from "@/pages/_app";

export namespace ThemeModels {
  export enum Font {
    SANS_SERIF = "SANS_SERIF",
    SERIF = "SERIF",
    MONO = "MONO",
  }

  export interface Theme {
    font: Font;
    isDarkMode: boolean;
  }

  const fontClassMap: Record<Font, string> = {
    SANS_SERIF: "font-sans",
    SERIF: "font-serif",
    MONO: "font-mono",
  };

  const getPageWrapper = () => {
    const pageWrapper = document.getElementById(PageWrapperId);
    if (!pageWrapper) {
      console.warn(`Page wrapper is not defined (id ${PageWrapperId})`);
    }

    return pageWrapper;
  };

  export const getFontClass = (font: Font) => fontClassMap[font];

  export const applyFontStyle = (oldFont: Font, newFont: Font) => {
    const pageWrapper = getPageWrapper();
    pageWrapper?.classList.remove(getFontClass(oldFont));
    pageWrapper?.classList.add(getFontClass(newFont));
  };

  const darkModeClass = "dark";

  export const applyColorModeStyle = (isDarkMode: boolean) => {
    const pageWrapper = getPageWrapper();
    if (isDarkMode) {
      pageWrapper?.classList.add(darkModeClass);
    } else {
      pageWrapper?.classList.remove(darkModeClass);
    }
  };

  export const getDefaultTheme = (): Theme => {
    return {
      font: Font.SANS_SERIF,
      isDarkMode: doesUserPreferDarkMode(),
    };
  };

  const doesUserPreferDarkMode = (): boolean => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const ThemeLSKey = "__theme__";

  export const save = (theme: Theme) => {
    localStorage.setItem(ThemeLSKey, JSON.stringify(theme));
  };

  export const load = (): Theme => {
    const defaultTheme = getDefaultTheme();

    try {
      const themeLS = localStorage.getItem(ThemeLSKey);
      if (!themeLS) {
        return defaultTheme;
      }

      const theme = JSON.parse(themeLS) as Theme;
      if (!isValidFont(theme.font)) {
        theme.font = defaultTheme.font;
      }

      if (typeof theme.isDarkMode !== "boolean") {
        theme.isDarkMode = defaultTheme.isDarkMode;
      }

      return theme;
    } catch (e) {
      console.warn("loadSavedTheme error", e);
      return defaultTheme;
    }
  };

  const isValidFont = (font: string) => {
    return Object.values(Font).includes(font as Font);
  };
}
