import styles from './styles.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { Logo } from '../Logo';

import { socialMedias } from './dataSocialMedias';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div>
        <div className={styles.socialMedias}>
          {socialMedias.map((item) => (
            <Link href={item.href} key={item.name}>
              <Image
                src={item.image}
                alt={item.name}
                width={item.width}
                height={item.height}
              />
            </Link>
          ))}
        </div>
        <p className={styles.copy}>&copy; onebitcode.com, 2023 </p>
      </div>
    </footer>
  );
};
