import styles from './styles.module.scss';

import Image from 'next/image';

import onebitmusic from '../../../../public/onebitcode.svg';
import logo from '../../../../public/logo.svg';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={onebitmusic} alt="onebitmusic" />
        <Image src={logo} alt="logo" />
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
        <Link href="" className="button">
          COMPRAR INGRESSOS
        </Link>
      </nav>
    </header>
  );
};
