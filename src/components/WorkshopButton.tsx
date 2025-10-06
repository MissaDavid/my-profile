import React from 'react';
import styles from './WorkshopButton.module.css';

export interface WorkshopButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  theme?: 'light' | 'dark';
  ariaLabel?: string;
}

export default function WorkshopButton({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  theme = 'dark',
  ariaLabel,
}: WorkshopButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[theme]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
