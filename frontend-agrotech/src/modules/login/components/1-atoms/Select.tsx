import type { ComponentPropsWithoutRef } from "react";

export interface SelectOption { value: string; label: string; }

interface SelectProps extends ComponentPropsWithoutRef<'select'> { options: SelectOption[]; placeholder?: string; }

function Select({ options, placeholder, ...props }: SelectProps) {
  return (
    <select {...props}>
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}
    </select>
  );
}

export default Select;