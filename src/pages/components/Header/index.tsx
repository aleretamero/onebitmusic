import styles from './styles.module.scss';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import onebitmusic from '../../../../public/onebitcode.svg';
import logo from '../../../../public/logo.svg';
import Link from 'next/link';

export const Header = () => {
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsScrollAtTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: isScrollAtTop ? 'transparent' : 'rgba(0, 0, 0, 0.8)',
      }}
    >
      <div className={styles.logo}>
        <Image src={onebitmusic} alt="onebitmusic" width={137} height={19.13} />
        <Image src={logo} alt="logo" width={16.455} height={20.188} />
      </div>
      <nav className={styles.nav}>
        <Link href="" className={styles.link}>
          INICIO
        </Link>
        <Link href="" className={styles.link}>
          ARTISTAS
        </Link>
        <Link href="" className={styles.link}>
          PROGRAMAÇÃO
        </Link>
        <Link href="" className={styles.link}>
          CONTATO
        </Link>
        <Link href="" className="button light">
          COMPRAR INGRESSOS
        </Link>
      </nav>
    </header>
  );
};
