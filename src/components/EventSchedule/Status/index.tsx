import styles from './styles.module.scss';

import { IconPlay } from '@/components/Icons/IconPlay';
import { IconCam } from '@/components/Icons/IconCam';
import { IconClock } from '@/components/Icons/IconClock';

const status = {
  previa: {
    name: 'Prévia',
    Image: IconPlay,
  },
  online: {
    name: 'AO VIVO',
    Image: IconCam,
  },
  'coming-soon': {
    name: 'Em breve',
    Image: IconClock,
  },
};

interface iProps {
  status: keyof typeof status;
}

export const Status = (props: iProps) => {
  const StatusImage = status[props.status].Image;

  return (
    <div className={styles.container}>
      <span
        className={`${styles.name} ${
          props.status === 'online' ? styles.online : ''
        }`}
      >
        {status[props.status].name}
      </span>
      <StatusImage width="24px" height="24px" />
    </div>
  );
};
