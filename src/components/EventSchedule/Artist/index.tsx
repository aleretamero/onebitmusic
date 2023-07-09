import Image from 'next/image';
import styles from './styles.module.scss';

interface ArtistProps {
  image: string;
  name: string;
  booth: string;
}

export const Artist = (artist: ArtistProps) => {
  return (
    <li className={styles.container}>
      <Image
        src={artist.image}
        alt={artist.name}
        width={56}
        height={56}
        style={{ objectFit: 'cover' }}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP85uxRDwAFugICHUWwcwAAAABJRU5ErkJggg=="
      />
      <h3>{artist.name}</h3>
      <p>
        Booth: <span>{artist.booth}</span>
      </p>
    </li>
  );
};
