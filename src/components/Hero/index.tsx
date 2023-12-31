import styles from './styles.module.scss';

import Link from 'next/link';

import { IconPlay } from '../Icons/IconPlay';
import { Timer } from './Timer';
import { Button } from '../Button';
import { TypeTimeLeft } from './Timer/calculateTimeLeft';

export const Hero = (props: { initialTime: TypeTimeLeft }) => {
  return (
    <section className={`${styles.container} limitedSection`} id="hero">
      <div className={styles.content}>
        <strong>A sua melhor Experiencia </strong>
        <h1>Musical Digital</h1>
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
      <Timer initialTime={props.initialTime} />
    </section>
  );
};
