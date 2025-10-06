import React from 'react';
import styles from './WorkshopCard.module.css';

export interface WorkshopCardProps {
  children: React.ReactNode;
  title?: string;
  statusLight?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
  ariaLabel?: string;
  role?: string;
}

export default function WorkshopCard({
  children,
  title,
  statusLight = true,
  className = '',
  theme = 'dark',
  ariaLabel,
  role,
}: WorkshopCardProps) {
  return (
    <div
      className={`${styles.card} ${styles[theme]} ${className}`}
      aria-label={ariaLabel}
      role={role}
    >
      {statusLight && <div className={styles.statusLight} aria-hidden="true" />}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
