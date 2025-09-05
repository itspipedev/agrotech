import React, { forwardRef } from "react";

interface OtpDigitInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  ariaLabel?: string;
}

const OtpDigitInput = forwardRef<HTMLInputElement, OtpDigitInputProps>(
  ({ value, onChange, onKeyDown, autoFocus, ariaLabel }, ref) => {
    return (
      <input
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        autoFocus={autoFocus}
        ref={ref}
        aria-label={ariaLabel}
        className="otp-input"
      />
    );
  }
);

export default OtpDigitInput;
