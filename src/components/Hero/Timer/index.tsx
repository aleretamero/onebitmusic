import styles from './styles.module.scss';

import { useEffect, useState } from 'react';

import { calculateTimeLeft, TypeTimeLeft } from './calculateTimeLeft';

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<TypeTimeLeft | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className={`${styles.timer} ${timeLeft ? '' : styles.hidden}`}>
      {timeLeft ? (
        timeLeft.map((item) => (
          <span key={item.type}>
            {item.value}
            {item.type[0]}
          </span>
        ))
      ) : (
        <span style={{ visibility: 'hidden' }}>skeleton</span>
      )}
    </div>
  );
};
