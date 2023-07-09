import styles from './styles.module.scss';

import { Title } from '../Title';
import { Carousel } from './Carousel';

export const Testimonials = () => {
  return (
    <section className={styles.container}>
      <Title>Relatos</Title>
      <div>
        <Carousel />
      </div>
    </section>
  );
};
