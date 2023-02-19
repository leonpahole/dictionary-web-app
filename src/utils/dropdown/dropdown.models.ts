import { Option as LibOption } from "react-dropdown";

export namespace DropdownModels {
  export interface Option {
    value: string;
    label: string;
    className: string;
  }

  export const toLibOptions = (
    option: Option[],
    defaultClassName?: string
  ): LibOption[] => {
    return option.map(
      (o): LibOption => ({
        label: o.label,
        value: o.value,
        className: `${o.className} ${defaultClassName}`,
      })
    );
  };
}
