import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { IconPlay } from '../Icons/IconPlay';
import { Timer } from './Timer';
import { Button } from '../Button';

export const Hero = () => {
  return (
    <section className={`${styles.container} limitedSection`} id="hero">
      <div className={styles.content}>
        <strong data-aos="zoom-in">A sua melhor Experiencia </strong>
        <h1 data-aos="zoom-in">Musical Digital</h1>
        <p>
          Prepare-se para uma experiência incrível e envolvente, onde a arte se
          une à performance para criar momentos inesquecíveis. Nossos shows
          artísticos são projetados para encantar, inspirar e transportar você
          para um mundo de criatividade e expressão.
        </p>
        <div className={styles.actions}>
          <Button color="red">Começar</Button>
          <Link href="">
            <IconPlay className={styles.iconPlay} />
            <span>Assistir Vídeo</span>
          </Link>
        </div>
      </div>
      <Timer />
    </section>
  );
};
