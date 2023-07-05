import styles from './styles.module.scss';

import Image from 'next/image';
import { Button } from '../Button';
import { Title } from '../Title';

import artists from '@/assets/artists.png';

export const Singers = () => {
  return (
    <section className={`${styles.container} limitedSection`}>
      <div className={styles.content}>
        <Title style={{ textAlign: 'start' }}>Artistas</Title>
        <p>
          No evento da OneBitMusic, você terá a oportunidade de desfrutar de uma
          incrível variedade de artistas talentosos. Nossa seleção musical
          abrange diferentes gêneros e estilos, garantindo uma experiência
          musical diversificada e emocionante. De DJs renomados a bandas
          cativantes, cada artista traz sua paixão e habilidade para criar
          performances envolventes. Prepare-se para se surpreender com músicas
          cativantes, ritmos vibrantes e momentos emocionantes durante todo o
          evento. Os artistas da OneBitMusic estão prontos para levar você a uma
          jornada musical única e inesquecível.
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
