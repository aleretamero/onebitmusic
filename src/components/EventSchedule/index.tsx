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
    <section
      className={`${styles.container} limitedSection`}
      id="event-schedule"
    >
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

      <table className={styles.containerEventSchedule}>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Conteúdo</th>
            <th>Artistas</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => (
            <tr className={styles.infoShows} key={index}>
              <td className={styles.time}>{day.time}</td>
              <td className={styles.description}>{day.description}</td>
              <td>
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
              </td>
              <td className={styles.status}>
                <Status status={day.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
