import styles from './styles.module.scss';

import Image from 'next/image';

import singer1 from '../../../public/images/singers/Img-1.png';
import singer2 from '../../../public/images/singers/Img-2.png';
import singer3 from '../../../public/images/singers/Img-3.png';
import singer4 from '../../../public/images/singers/Img-4.png';

import { Button } from '../Button';
import { Title } from '../Title';

export const Singers = () => {
  return (
    <section className={`${styles.container} limitedSection`} id="singers">
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
      <div className={styles.containerImages}>
        <div className={styles.row}>
          <div className={`${styles.contentImage} ${styles.content1}`}>
            <Image
              src={singer1}
              alt="singer"
              width={370}
              height={270}
              quality={100}
            />
          </div>
          <div className={`${styles.contentImage} ${styles.content2}`}>
            <Image
              src={singer2}
              alt="singer"
              width={270}
              height={300}
              quality={100}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.contentImage} ${styles.content3}`}>
            <Image
              src={singer3}
              alt="singer"
              width={270}
              height={300}
              quality={100}
            />
          </div>
          <div className={`${styles.contentImage} ${styles.content4}`}>
            <Image
              src={singer4}
              alt="singer"
              width={370}
              height={270}
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* <div className={styles.image}> */}
      {/* <Image src={artists} alt="ImageShows" width={670} height={712} /> */}

      {/* </div> */}
    </section>
  );
};
