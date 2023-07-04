import styles from './styles.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import facebook from '@/assets/facebook.svg';
import twiter from '@/assets/twiter.svg';
import linkedin from '@/assets/linkedin.svg';
import instagram from '@/assets/instagram.svg';

const socialMedias = [
  { name: 'facebook', image: facebook, width: 13.13, height: 25, href: '' },
  { name: 'twiter', image: twiter, width: 25.48, height: 20.72, href: '' },
  { name: 'linkedin', image: linkedin, width: 22.5, height: 22.5, href: '' },
  { name: 'instagram', image: instagram, width: 25, height: 25, href: '' },
];

import { Logo } from '../Logo';

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
