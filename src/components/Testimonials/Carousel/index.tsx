import styles from './styles.module.scss';

import { useEffect, useState } from 'react';

import { Report } from '../Report';
import { reportsData, TypeReport } from '../reportsData';
import { motion, useMotionValue, useTransform } from 'framer-motion';

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

  const x = useMotionValue(0);
  const isLeft = useTransform(x, (value) => value < 0);
  const isRight = useTransform(x, (value) => value > 0);

  const handleDragEnd = () => {
    if (isLeft.get()) {
      handleReports(2);
    }

    if (isRight.get()) {
      handleReports(0);
    }
  };

  return (
    <div className={styles.carousel}>
      {currentReports.map((item, index) => (
        <motion.div
          tabIndex={-1}
          key={item.profileName}
          drag="x"
          dragElastic={0.11}
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x, cursor: 'grab' }}
          whileTap={{ cursor: 'grabbing' }}
          onDragEnd={handleDragEnd}
          className={index !== 1 ? styles.sideReport : styles.emphasisReport}
        >
          <Report
            report={item}
            onClick={() => handleReports(index)}
            index={index}
          />
        </motion.div>
      ))}
    </div>
  );
};
