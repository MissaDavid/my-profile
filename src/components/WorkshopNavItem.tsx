import React from 'react';
import styles from './WorkshopNavItem.module.css';

export interface WorkshopNavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
  ariaLabel?: string;
  ariaCurrent?: boolean;
}

export default function WorkshopNavItem({
  children,
  href,
  onClick,
  active = false,
  className = '',
  theme = 'dark',
  ariaLabel,
  ariaCurrent,
}: WorkshopNavItemProps) {
  const itemClassName = `${styles.navItem} ${styles[theme]} ${active ? styles.active : ''} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={itemClassName}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-current={ariaCurrent || active ? 'page' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={itemClassName}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
