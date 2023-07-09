import styles from './styles.module.scss';

import Image from 'next/image';

import { Button } from '../Button';
import { Title } from '../Title';

import { sponsors } from './sponsorsData';

export const Sponsors = () => {
  return (
    <section className={`${styles.container} limitedSection`}>
      <Title>Nossos investidores</Title>

      <div className={styles.content}>
        {sponsors.map((item, index) => (
          <div
            key={item.name}
            data-aos="zoom-in"
            data-aos-duration={200 * (index + 0.5)}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={item.width}
              height={item.height}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP85uxRDwAFugICHUWwcwAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </div>

      <Button color="light">Se torne um Investidor</Button>
    </section>
  );
};
