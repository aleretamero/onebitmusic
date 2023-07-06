import { Button } from '../Button';
import { Title } from '../Title';
import styles from './styles.module.scss';
import Image from 'next/image';

import { sponsors } from './sponsorsData';

export const Sponsors = () => {
  return (
    <section className={`${styles.container} limitedSection`}>
      <Title>Nossos investidores</Title>

      <div className={styles.content}>
        {sponsors.map((item) => (
          <div key={item.name}>
            <Image
              src={item.image}
              alt={item.name}
              width={item.width}
              height={item.height}
            />
          </div>
        ))}
      </div>

      <Button color="light">Se torne um Investidor</Button>
    </section>
  );
};
