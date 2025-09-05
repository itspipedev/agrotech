import React from "react";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-green-600 cursor-pointer"
      />
      <label htmlFor={id} className="text-sm text-black-800 cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
