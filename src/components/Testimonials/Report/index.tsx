import { IconQuotes } from '@/components/icons/IconQuotes';
import styles from './styles.module.scss';

interface ReportProps {
  report?: string;
}

export const Report = ({ report }: ReportProps) => {
  return (
    <>
      <article className={styles.article}>
        <p>
          <IconQuotes />
          <span>
            Através dos shows digitais e da tecnologia de realidade virtual da
            OneBitMusic, pude mergulhar em um universo musical fascinante. Os
            visuais deslumbrantes, a qualidade do áudio e a interatividade
            oferecida pela plataforma me deixaram maravilhado. A OneBitMusic
            realmente entende como proporcionar experiências musicais únicas e
            memoráveis.
          </span>
          <IconQuotes />
        </p>
      </article>
    </>
  );
};
