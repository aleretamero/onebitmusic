import styles from './styles.module.scss';

import Image from 'next/image';

import play from '@/assets/play-circle.svg';
import cam from '@/assets/cam.svg';
import clock from '@/assets/clock.svg';

const status = {
  previa: {
    name: 'Prévia',
    image: play,
  },
  online: {
    name: 'AO VIVO',
    image: cam,
  },
  'coming-soon': {
    name: 'Em breve',
    image: clock,
  },
};

interface iProps {
  status: keyof typeof status;
}

export const Status = (props: iProps) => {
  return (
    <div className={styles.container}>
      <span
        className={`${styles.name} ${
          props.status === 'online' ? styles.online : ''
        }`}
      >
        {status[props.status].name}
      </span>
      <Image
        src={status[props.status].image}
        alt={status[props.status].name}
        width={24}
        height={24}
      />
    </div>
  );
};
