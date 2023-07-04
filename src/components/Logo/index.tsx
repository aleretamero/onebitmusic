import styles from './styles.module.scss';

import Image from 'next/image';

import onebitmusic from '../../../public/onebitcode.svg';
import logo from '../../../public/logo.svg';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={onebitmusic} alt="onebitmusic" width={137} height={19.13} />
      <Image src={logo} alt="logo" width={16.455} height={20.188} />
    </div>
  );
};
