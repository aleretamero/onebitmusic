import Image from 'next/image';
import { Title } from '../Title';
import styles from './styles.module.scss';
import { Artist } from './Artist';
import { Status } from './Status';

export const EventSchedule = () => {
  return (
    <section className={styles.container}>
      <Title style={{ textAlign: 'start' }}>Nossa Programação</Title>

      <ul className={styles.listDays}>
        <li className={`${styles.day} ${styles.active}`}>
          <strong>Dia 1</strong>
          <span>23 Setembro</span>
        </li>
        <li className={styles.day}>
          <strong>Dia 2</strong>
          <span>24 Setembro</span>
        </li>
        <li className={styles.day}>
          <strong>Dia 3</strong>
          <span>25 Setembro</span>
        </li>
      </ul>

      <div className={styles.containerEventSchedule}>
        <header>
          <strong>Hora</strong>
          <strong>Conteudo</strong>
          <strong>Artistas</strong>
        </header>
        <article className={styles.infoShows}>
          <span>
            <time dateTime="11:00">11:00 AM </time>to
            <time dateTime="12:00"> 12:00 PM</time>
          </span>
          <p>
            Desfrute de uma performance emocionante com Yui Ronald, um artista
            solo que encanta o público com sua voz cativante e letras
            inspiradoras. Prepare-se para uma noite de músicas envolventes e
            momentos emocionantes.
          </p>
          <ul>
            <li>
              <span>Imagem Artista</span>
              <h3>Nome Artista</h3>
              <p>
                Booth: <span>2F12</span>
              </p>
            </li>
          </ul>
          <div>
            <span>status</span>
          </div>
        </article>
        <article className={styles.infoShows}>
          <span>
            <time dateTime="11:00">11:00 AM </time>to
            <time dateTime="12:00"> 12:00 PM</time>
          </span>
          <p>
            Desfrute de uma performance emocionante com Yui Ronald, um artista
            solo que encanta o público com sua voz cativante e letras
            inspiradoras. Prepare-se para uma noite de músicas envolventes e
            momentos emocionantes.
          </p>
          <ul>
            <li>
              <Artist image="" name="The Harmonics" booth="6F20" />
            </li>
          </ul>
          <div>
            <Status status='online' />
          </div>
        </article>
      </div>
    </section>
  );
};
