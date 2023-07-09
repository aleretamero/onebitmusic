import styles from './styles.module.scss';

import { useEffect, useState } from 'react';

import { calculateTimeLeft, TypeTimeLeft } from './calculateTimeLeft';

export const Timer = ({ initialTime }: { initialTime: TypeTimeLeft }) => {
  const [timeLeft, setTimeLeft] = useState<TypeTimeLeft>(initialTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className={styles.timer}>
      {timeLeft.map((item) => (
        <span key={item.type}>
          {item.value}
          {item.type[0]}
        </span>
      ))}
    </div>
  );
};
