import styles from './styles.module.scss';

import Link from 'next/link';

import { Logo } from '../Logo';

import { socialMedias } from './socialMediasData';

export const Footer = () => {
  return (
    <footer className={`${styles.footer} limitedSection`}>
      <Logo />
      <div>
        <div className={styles.socialMedias}>
          {socialMedias.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              target="_blank"
              aria-label={item.name}
            >
              <item.Image />
            </Link>
          ))}
        </div>
        <p className={styles.copy}>&copy; onebitcode.com, 2023 </p>
      </div>
    </footer>
  );
};
