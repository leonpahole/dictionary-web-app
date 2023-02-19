import { ThemeModels } from "@/utils/theme/theme.models";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface ThemeContextType {
  font: ThemeModels.Font;
  setFont(font: ThemeModels.Font): void;

  isDarkMode: boolean;
  toggleDarkMode(): void;
}

export const ThemeContext = createContext<ThemeContextType>({} as any);

interface IProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<ThemeModels.Theme>(
    ThemeModels.getDefaultTheme()
  );

  const updateTheme = useCallback((toUpdate: Partial<ThemeModels.Theme>) => {
    setTheme((prev) => {
      const updated = {
        ...prev,
        ...toUpdate,
      };

      if (toUpdate.isDarkMode != null) {
        ThemeModels.applyColorModeStyle(toUpdate.isDarkMode);
      }

      if (toUpdate.font != null) {
        ThemeModels.applyFontStyle(prev.font, toUpdate.font);
      }

      ThemeModels.save(updated);
      return updated;
    });
  }, []);

  useEffect(() => {
    updateTheme(ThemeModels.load());
  }, [updateTheme]);

  const setFont = useCallback(
    (font: ThemeModels.Font) => {
      updateTheme({ font });
    },
    [updateTheme]
  );

  const toggleDarkMode = useCallback(() => {
    updateTheme({ isDarkMode: !theme.isDarkMode });
  }, [theme.isDarkMode, updateTheme]);

  const value = useMemo(
    (): ThemeContextType => ({
      font: theme.font,
      setFont,
      isDarkMode: theme.isDarkMode,
      toggleDarkMode,
    }),
    [setFont, theme, toggleDarkMode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
