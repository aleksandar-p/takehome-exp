import * as React from "react";

interface Option {
  value: string | number;
  label: string | number;
}

interface SelectProps {
  options: Option[];
  value: string | number
  onChange(value: string)
}

export const Select = ({ options, value, onChange }: SelectProps) => {
  let selected = options.find((option) => option.value === value);
  return (
    <div className="select">
      <div className="selected-label">{selected.label || ""}</div>
      <select value={value} onChange={({ currentTarget: { value }}) => onChange && onChange(value)}>
      {
        options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))
      }
      </select>
    </div>
  );
}
