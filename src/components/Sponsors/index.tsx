import { Button } from '../Button';
import { Title } from '../Title';
import styles from './styles.module.scss';
import Image from 'next/image';

import { sponsors } from './sponsorsData';

export const Sponsors = () => {
  return (
    <section className={`${styles.container} limitedSection`}>
      <Title data-aos="fade-up">Nossos investidores</Title>

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
            />
          </div>
        ))}
      </div>

      <Button color="light" data-aos="fade-up">
        Se torne um Investidor
      </Button>
    </section>
  );
};
