import { Title } from '../Title';
import { Carousel } from './Carousel';
import styles from './styles.module.scss';

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
