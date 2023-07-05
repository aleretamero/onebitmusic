import { Title } from '../Title';
import { Post } from './Post';
import styles from './styles.module.scss';

export const Gallery = () => {
  return (
    <section className={styles.container}>
      <div className="limitedSection">
        <Title>Galeria de Momentos Compartilhados</Title>
      </div>
      <div className={styles.carousel}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};
