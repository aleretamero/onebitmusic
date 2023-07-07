import styles from './styles.module.scss';

import { ComponentPropsWithRef, ReactNode } from 'react';

import { IconArrow } from '../Icons/IconArrow';

interface BottonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  color: 'light' | 'dark' | 'red' | 'lightOutlineRed' | 'lightOutlineDark';
  arrow?: boolean;
}

export const Button = ({ children, color, arrow, ...props }: BottonProps) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} {...props}>
      <span>{children}</span>
      <span>{arrow ? <IconArrow /> : null}</span>
    </button>
  );
};
