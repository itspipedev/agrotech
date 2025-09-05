import React from 'react';
import type { SelectProps } from '../../types';

const Select: React.FC<SelectProps & { className?: string }> = ({ 
  value, 
  onChange, 
  options, 
  className = '' 
}) => {
  return (
    <select 
      value={value} 
      onChange={onChange} 
      className={`input-field ${className}`}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;