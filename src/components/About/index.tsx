import styles from './styles.module.scss';

import Image from 'next/image';

import { useState } from 'react';

import { Title } from '../Title';
import { Button } from '../Button';

import imageAbout1 from '../../../public/images/about/about-1.png';
import imageAbout2 from '../../../public/images/about/about-2.png';

export const About = () => {
  const [imageBlur, setImageBlur] = useState('image2');

  return (
    <section
      className={`${styles.container} limitedSection`}
      data-aos="fade-down-right"
    >
      <div className={styles.containerImages}>
        <Image
          src={imageAbout1}
          alt="ImageShows"
          width={480}
          height={480}
          quality={100}
          onClick={() => setImageBlur('image2')}
          style={imageBlur === 'image1' ? { zIndex: 0, opacity: '30%' } : {}}
        />
        <Image
          src={imageAbout2}
          alt="ImageShows"
          width={480}
          height={480}
          quality={100}
          onClick={() => setImageBlur('image1')}
          style={imageBlur === 'image2' ? { zIndex: 0, opacity: '30%' } : {}}
        />
      </div>

      <div className={styles.content} data-aos="fade-down-left">
        <Title style={{ textAlign: 'start' }} data-aos="fade-down-left">
          Sobre a gente
        </Title>
        <p>
          Na onebitmusic, estamos redefinindo a maneira como experimentamos e
          nos envolvemos com a música, utilizando tecnologia de realidade
          virtual (VR) para criar shows e performances que transcendem os
          limites físicos e levam você a novos patamares de entretenimento
          musical.
        </p>
        <Button color="light" arrow={true} data-aos="fade-down-left">
          Ler mais
        </Button>
      </div>
    </section>
  );
};
