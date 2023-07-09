import styles from './styles.module.scss';

import { Title } from '../Title';
import { Artist } from './Artist';
import { Status } from './Status';
import { useState } from 'react';

import { events } from './eventsData';

import { listDays } from './listDaysData';

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
        {listDays.map((day) => (
          <li
            key={day.id}
            className={`${styles.day} ${
              activeDay === day.id ? styles.active : ''
            }`}
            onClick={() => handleClick(day.id)}
          >
            <strong>{day.label}</strong>
            <span>{day.labelExtended}</span>
          </li>
        ))}
      </ul>

      <table className={styles.containerEventSchedule}>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Conteúdo</th>
            <th>Artistas</th>
            <th style={{ visibility: 'hidden' }}>Status</th>
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
