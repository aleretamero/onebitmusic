import styles from './styles.module.scss';

import { ComponentPropsWithRef, ReactNode } from 'react';

import { HiArrowRight } from 'react-icons/hi';

interface BottonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  color: 'light' | 'dark' | 'red';
  arrow?: boolean;
}

export const Button = ({ children, color, arrow, ...props }: BottonProps) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} {...props}>
      {children}
      {arrow ? <HiArrowRight /> : null}
    </button>
  );
};
