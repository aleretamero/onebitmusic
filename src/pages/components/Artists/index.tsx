import styles from './styles.module.scss';

import Image from 'next/image';
import { Button } from '../Button';
import { Title } from '../Title';

import artists from '@/assets/artists.png';

export const Artists = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Title style={{ textAlign: 'start' }}>Sobre a gente</Title>
        <p>
          Na onebitmusic, estamos redefinindo a maneira como experimentamos e
          nos envolvemos com a música, utilizando tecnologia de realidade
          virtual (VR) para criar shows e performances que transcendem os
          limites físicos e levam você a novos patamares de entretenimento
          musical.
        </p>
        <Button color="light" arrow={true}>
          Veja a lista completa
        </Button>
      </div>
      <div className={styles.image}>
        <Image src={artists} alt="ImageShows" width={670} height={712} />
      </div>
    </section>
  );
};
