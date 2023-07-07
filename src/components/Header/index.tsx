import styles from './styles.module.scss';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useMedia } from '@/hooks/useMedia';
import { Logo } from '../Logo';
import { Button } from '../Button';

import { linksData } from './linksData';

export const Header = () => {
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  const mobile = useMedia('(max-width: 64rem)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsScrollAtTop(scrollTop === 0);
    };

    handleScroll();

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
      className={`${styles.header} limitedSection`}
      style={{
        backgroundColor: isScrollAtTop
          ? 'transparent'
          : 'rgba(34, 34, 34, 0.95)',
      }}
    >
      <Logo />

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
        <nav
          className={`${styles.nav} ${
            mobileMenu && mobile ? styles.active : ''
          }`}
        >
          {linksData.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className={styles.link}
              onClick={() => mobile && setMobileMenu(false)}
            >
              {link.text}
            </Link>
          ))}
          <Button
            color="light"
            onClick={() => {
              router.push('#pricing');
              mobile && setMobileMenu(false);
            }}
          >
            COMPRAR INGRESSOS
          </Button>
        </nav>
      )}
    </header>
  );
};
