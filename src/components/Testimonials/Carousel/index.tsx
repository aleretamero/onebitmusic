import { Report } from '../Report';
import styles from './styles.module.scss';

import { useEffect, useState } from 'react';

import { reportsData, TypeReport } from '../reportsData';

export const Carousel = () => {
  const [reports, setReports] = useState<TypeReport[]>(reportsData);
  const [currentReports, setCurrentReports] = useState<TypeReport[]>([]);

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
          key={item.profileName}
          onClick={() => handleReports(index)}
          className={index !== 1 ? styles.sideReport : styles.emphasisReport}
        >
          <Report report={item} />
        </div>
      ))}
    </div>
  );
};
