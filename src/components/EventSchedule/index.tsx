import styles from './styles.module.scss';
import Image from 'next/image';
import { Title } from '../Title';
import { Artist } from './Artist';
import { Status } from './Status';
import { useState } from 'react';

import { events } from './eventsData';

export const EventSchedule = () => {
  const [days, setDays] = useState(events.day1);
  const [activeDay, setActiveDay] = useState('day1');

  const handleClick = (day: 'day1' | 'day2' | 'day3') => {
    setDays(events[day]);
    setActiveDay(day);
  };

  return (
    <section className={styles.container}>
      <Title style={{ textAlign: 'start' }}>Nossa Programação</Title>

      <ul className={styles.listDays}>
        <li
          className={`${styles.day} ${
            activeDay === 'day1' ? styles.active : ''
          }`}
          onClick={() => handleClick('day1')}
        >
          <strong>Dia 1</strong>
          <span>23 Setembro</span>
        </li>
        <li
          className={`${styles.day} ${
            activeDay === 'day2' ? styles.active : ''
          }`}
          onClick={() => handleClick('day2')}
        >
          <strong>Dia 2</strong>
          <span>24 Setembro</span>
        </li>
        <li
          className={`${styles.day} ${
            activeDay === 'day3' ? styles.active : ''
          }`}
          onClick={() => handleClick('day3')}
        >
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
        {days.map((day, index) => (
          <article className={styles.infoShows} key={index}>
            <time>{day.time}</time>
            <p>{day.description}</p>
            <ul>
              {day.artists.map((artist, index) => (
                <Artist
                  key={artist.name + index}
                  image={artist.image}
                  name={artist.name}
                  booth={artist.booth}
                />
              ))}
            </ul>
            <div>
              <Status status={day.status} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
