import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

type TypeTimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = () => {
  const difference =
    Number(new Date('2023-07-11T23:59:00')) - Number(new Date());

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
};

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
      <span>{timeLeft && timeLeft.days}d</span>
      <span>{timeLeft && timeLeft.hours}h</span>
      <span>{timeLeft && timeLeft.minutes}m</span>
      <span>{timeLeft && timeLeft.seconds}s</span>
    </div>
  );
};
