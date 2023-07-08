import styles from './styles.module.scss';
import { Title } from '../Title';
import { Carousel } from './Carousel';

export const Testimonials = () => {
  return (
    <section className={styles.container}>
      <Title data-aos="fade-up">Relatos</Title>
      <div data-aos="zoom-in">
        <Carousel />
      </div>
    </section>
  );
};
