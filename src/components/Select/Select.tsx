import React from 'react';
import './Select.css';

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  options: {
    value: string;
    label: string;
  }[]
}

const Select = ({options, ...props}: SelectProps) => {
  return (
    <select
      {...props}
    >
      <option value="">...</option>
      {options.map((option: any, i: number) => {
        return (
          <option key={i} value={option.label}>
            {option.label}
          </option>
        );
      })}
    </select>
  )
}

export default Select;