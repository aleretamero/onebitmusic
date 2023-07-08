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
    <section className={`${styles.container} limitedSection`}>
      <div className={styles.containerImages} data-aos="zoom-in">
        <div
          className={`${styles.contentImage1} ${
            imageBlur === 'image1' && styles.imageBlur
          }`}
          onClick={() => setImageBlur('image2')}
        >
          <Image
            src={imageAbout1}
            alt="ImageShows"
            width={460}
            height={480}
            quality={100}
          />
        </div>
        <div
          className={`${styles.contentImage2} ${
            imageBlur === 'image2' && styles.imageBlur
          }`}
          onClick={() => setImageBlur('image1')}
        >
          <Image
            src={imageAbout2}
            alt="ImageShows"
            width={460}
            height={480}
            quality={100}
          />
        </div>
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
