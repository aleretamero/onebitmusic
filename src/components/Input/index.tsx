import styles from './styles.module.scss';

import { ComponentPropsWithRef } from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  error?: string | null;
}

export const Input = ({
  name,
  label,
  error,
  value,
  onChange,
  onBlur,
  ...props
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
