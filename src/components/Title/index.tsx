import styles from './styles.module.scss';

import { ComponentPropsWithRef, ReactNode } from 'react';

interface TitleProps extends ComponentPropsWithRef<'h2'> {
  children: ReactNode;
}

export const Title = ({ children, ...props }: TitleProps) => {
  return (
    <h2 className={styles.title} {...props}>
      {children}
    </h2>
  );
};
