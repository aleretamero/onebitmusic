import styles from './styles.module.scss';

import { Title } from '../Title';
import { Carousel } from './Carousel';

export const Gallery = () => {
  return (
    <section className={styles.container}>
      <div className="limitedSection">
        <Title>Galeria de Momentos Compartilhados</Title>
      </div>
      <Carousel />
    </section>
  );
};
