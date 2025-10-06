import React from 'react';
import styles from './WorkshopInput.module.css';

export interface WorkshopInputProps {
  type?: 'text' | 'email' | 'password' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  theme?: 'light' | 'dark';
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export default function WorkshopInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  name,
  id,
  theme = 'dark',
  ariaLabel,
  ariaDescribedBy,
}: WorkshopInputProps) {
  return (
    <input
      className={`${styles.input} ${styles[theme]}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-required={required}
    />
  );
}
