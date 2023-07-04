import styles from './styles.module.scss';

export const Timer = () => {
  return (
    <div className={styles.timer}>
      <span>5d</span> <span>2h</span> <span>26m</span> <span>12s</span>
    </div>
  );
};
