import styles from './styles.module.scss';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import onebitmusic from '../../../../public/onebitcode.svg';
import logo from '../../../../public/logo.svg';
import Link from 'next/link';

import { useMedia } from '@/hooks/useMedia';

export const Header = () => {
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobile = useMedia('(max-width: 64rem)');

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

  useEffect(() => {
    mobile ? setMobileMenu(false) : setMobileMenu(true);
  }, [mobile]);

  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: isScrollAtTop ? 'transparent' : 'rgba(0, 0, 0, 0.9)',
      }}
    >
      <div className={styles.logo}>
        <Image src={onebitmusic} alt="onebitmusic" width={137} height={19.13} />
        <Image src={logo} alt="logo" width={16.455} height={20.188} />
      </div>

      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      {mobileMenu && (
        <nav className={`${styles.nav} ${mobileMenu && mobile ? styles.active : ''}`}>
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
      )}
    </header>
  );
};
