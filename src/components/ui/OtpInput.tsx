import React, { useRef, useState, KeyboardEvent, ClipboardEvent } from 'react';
import { cn } from '../../lib/utils';

interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function OtpInput({ length = 6, value, onChange, disabled }: OtpInputProps) {
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    if (!/^[0-9]*$/.test(val)) return;

    const newValue = value.split('');
    // Handle single digit input
    newValue[index] = val.slice(-1);
    const joinedValue = newValue.join('');
    onChange(joinedValue);

    if (val && index < length - 1) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newValue = value.split('');
      
      if (newValue[index]) {
        // Clear current input
        newValue[index] = '';
        onChange(newValue.join(''));
      } else if (index > 0) {
        // Move to previous input and clear it
        newValue[index - 1] = '';
        onChange(newValue.join(''));
        setActiveInput(index - 1);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOnPaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, length);
    
    if (pastedData) {
      const newValue = value.split('');
      for (let i = 0; i < pastedData.length; i++) {
        newValue[i] = pastedData[i];
      }
      onChange(newValue.join(''));
      
      const nextIndex = Math.min(pastedData.length, length - 1);
      setActiveInput(nextIndex);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center sm:justify-start w-full" dir="ltr">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          value={value[index] || ''}
          onChange={(e) => handleOnChange(e, index)}
          onKeyDown={(e) => handleOnKeyDown(e, index)}
          onPaste={handleOnPaste}
          onFocus={() => setActiveInput(index)}
          disabled={disabled}
          autoFocus={index === 0}
          autoComplete={index === 0 ? "one-time-code" : "off"}
          className={cn(
            "w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-medium bg-surface-base border rounded-md transition-all outline-none",
            "focus:border-ink-gray-9 focus:ring-1 focus:ring-ink-gray-9",
            disabled ? "opacity-50 cursor-not-allowed bg-surface-gray-1 border-outline-gray-2" : "border-outline-gray-3 text-ink-gray-9"
          )}
        />
      ))}
    </div>
  );
}
