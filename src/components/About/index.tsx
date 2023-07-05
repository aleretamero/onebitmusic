import styles from './styles.module.scss';

import Image from 'next/image';

import imageShows from '@/assets/shows-about.png';
import { Title } from '../Title';
import { Button } from '../Button';

export const About = () => {
  return (
    <section className={`${styles.container} limitedSection`}>
      <div className={styles.image}>
        <Image src={imageShows} alt="ImageShows" width={530} height={530} />
      </div>

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
          Ler mais
        </Button>
      </div>
    </section>
  );
};
