import styles from './styles.module.scss';

import { IconQuotes } from '@/components/Icons/IconQuotes';

import { Profile } from '../Profile';
import { TypeReport } from '../reportsData';

interface ReportProps {
  report: TypeReport;
  index: number;
  onClick: () => void;
}

export const Report = ({ report, onClick, index }: ReportProps) => {
  return (
    <>
      <article
        className={`${styles.article} ${
          index === 0 ? styles.left : index === 2 ? styles.right : ''
        }`}
        onClick={onClick}
      >
        <IconQuotes />
        <p>{report.report}</p>
        <IconQuotes />
      </article>
      <Profile
        src={report.profileAvatar}
        name={report.profileName}
        city={report.ProfileCity}
      />
    </>
  );
};
