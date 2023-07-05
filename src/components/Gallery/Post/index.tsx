import styles from './styles.module.scss';

import Image from 'next/image';

import { AiFillHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
// import { BsHeart } from 'react-icons/bs';

export const Post = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/posts/Img-1.svg" alt="" width={370} height={370} />
      <div className={styles.ratings}>
        <div className={styles.likes}>
          <AiFillHeart />
          <span>321</span>
        </div>
        <div className={styles.comments}>
          <FaRegComment />
          <span>140</span>
        </div>
      </div>
      <h4>Vibrações Eletrizantes na OneBitMusic</h4>
      <p>
        Uma imagem que captura a energia contagiante do show digital da
        #OneBitMusic. Os visuais hipnotizantes e a batida pulsante nos
        transportaram para uma jornada musical incrível. Compartilhe suas fotos
        e faça parte da nossa galeria de fãs!
      </p>
    </div>
  );
};
