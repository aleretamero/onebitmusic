import { Report } from '../Report';
import styles from './styles.module.scss';

import { useEffect, useState } from 'react';

const data = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

export const Carousel = () => {
  const [reports, setReports] = useState<string[]>(data);
  const [currentReports, setCurrentReports] = useState<string[]>([]);

  useEffect(() => {
    const [prevReport, emphasisReport, nextReport] = reports;

    setCurrentReports([prevReport, emphasisReport, nextReport]);
  }, [reports]);

  const handleReports = (index: number) => {
    if (index === 0) {
      const updatedReports = [...reports];
      const lastReport = updatedReports.pop()!;
      setReports([lastReport, ...updatedReports]);
    }

    if (index === 2) {
      const [firstReport, ...restReports] = reports;
      setReports([...restReports, firstReport]);
    }
  };

  return (
    <div className={styles.carousel}>
      {currentReports.map((item, index) => (
        <div
          key={index}
          onClick={() => handleReports(index)}
          className={`${styles.containerReport} ${
            index !== 1 ? styles.side : ''
          }`}
        >
          <Report />
        </div>
      ))}
    </div>
  );
};
