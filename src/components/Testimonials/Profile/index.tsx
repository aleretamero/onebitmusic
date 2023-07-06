import Image from 'next/image';
import styles from './styles.module.scss';

interface ProfileProps {
  src: string;
  name: string;
  city: string;
}

export const Profile = ({ src, name, city }: ProfileProps) => {
  return (
    <div className={styles.container}>
      <Image src={src} alt="" width={120} height={120} />
      <strong>{name}</strong>
      <span>{city}</span>
    </div>
  );
};
