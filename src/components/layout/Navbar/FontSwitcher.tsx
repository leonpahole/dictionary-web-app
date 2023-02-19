import { AppDropdown } from "@/components/shared/AppDropdown";
import { withClientOnly } from "@/components/shared/withClientOnly";
import { useTheme } from "@/providers/ThemeContext";
import { DropdownModels } from "@/utils/dropdown/dropdown.models";
import { ThemeModels } from "@/utils/theme/theme.models";

const options: DropdownModels.Option[] = [
  {
    value: ThemeModels.Font.SANS_SERIF,
    label: "Sans Serif",
    className: ThemeModels.getFontClass(ThemeModels.Font.SANS_SERIF),
  },
  {
    value: ThemeModels.Font.SERIF,
    label: "Serif",
    className: ThemeModels.getFontClass(ThemeModels.Font.SERIF),
  },
  {
    value: ThemeModels.Font.MONO,
    label: "Mono",
    className: ThemeModels.getFontClass(ThemeModels.Font.MONO),
  },
];

export const FontSwitcher = withClientOnly(() => {
  const { font, setFont } = useTheme();

  return (
    <AppDropdown
      options={options}
      value={font}
      placeholder="Select a font you'd like to use"
      onSelect={setFont}
    />
  );
});
