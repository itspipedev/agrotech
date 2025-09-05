import React, { useRef, useEffect } from "react";
import OtpDigitInput from "../1-atoms/OtpDigitInput";

interface OtpInputProps {
  length: number;
  value: string;
  onValueChange: (value: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, value, onValueChange }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleChange = (digit: string, index: number) => {
    const newOtp = [...value.padEnd(length, " ")];

    if (digit === "") {
      newOtp[index] = "";
      onValueChange(newOtp.join("").trimEnd());
      return;
    }

    if (/\d/.test(digit)) {
      newOtp[index] = digit;
      onValueChange(newOtp.join("").trimEnd());

      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    onValueChange(pasteData);
  };

  return (
    <div className="otp-input-group" onPaste={handlePaste}>
      {Array.from({ length }, (_, index) => (
        <OtpDigitInput
          key={index}
          value={value[index] || ""}
          onChange={(val) => handleChange(val, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          autoFocus={index === 0}
          ariaLabel={`Dígito ${index + 1} del código`}
          ref={(el) => {
            if (el) inputRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
