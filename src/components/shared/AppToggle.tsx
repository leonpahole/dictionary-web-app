/* eslint-disable jsx-a11y/label-has-associated-control */
import Toggle from "react-toggle";
import "react-toggle/style.css";

interface IProps {
  isChecked: boolean;
  onToggle: () => void;
  label: React.ReactNode;
}

export const AppToggle = ({ isChecked, onToggle, label }: IProps) => {
  return (
    <label className="flex items-center">
      <Toggle
        checked={isChecked}
        onChange={onToggle}
        icons={false}
        className="app-toggle"
      />
      {label}
    </label>
  );
};
