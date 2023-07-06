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
