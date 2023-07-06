import styles from './styles.module.scss';

import { IconQuotes } from '@/components/icons/IconQuotes';

import { Profile } from '../Profile';
import { TypeReport } from '../reportsData';

interface ReportProps {
  report: TypeReport;
}

export const Report = ({ report }: ReportProps) => {
  return (
    <>
      <article className={styles.article}>
        <p>
          <IconQuotes />
          <span>{report.report}</span>
          <IconQuotes />
        </p>
      </article>
      <Profile
        src={report.profileAvatar}
        name={report.profileName}
        city={report.ProfileCity}
      />
    </>
  );
};
