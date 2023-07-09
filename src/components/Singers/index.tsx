import styles from './styles.module.scss';

import Image from 'next/image';

import { Button } from '../Button';
import { Title } from '../Title';
import { useMedia } from '@/hooks/useMedia';

import { singers } from './singers';

export const Singers = () => {
  const media = useMedia('(max-width: 49.375rem)');

  return (
    <section className={`${styles.container} limitedSection`} id="singers">
      <div className={styles.content} data-aos="fade-up-right">
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
        {singers.map((singersRow, indexRow) => (
          <div key={'row' + indexRow} className={styles.row}>
            {singersRow.map((singer, index) => (
              <div
                key={singer.name}
                className={`${styles.contentImage} ${
                  styles['content' + (indexRow === 0 ? index + 1 : index + 3)]
                }`}
                data-aos="zoom-in"
              >
                <Image
                  src={singer.src}
                  alt={singer.name}
                  width={media ? singer.widthPrimary : singer.widthSecundary}
                  height={media ? singer.heightPrimary : singer.heightSecundary}
                  quality={100}
                  style={{ objectFit: 'cover', borderRadius: '1.5rem' }}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP85uxRDwAFugICHUWwcwAAAABJRU5ErkJggg=="
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
