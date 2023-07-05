import styles from './styles.module.scss';

import Image from 'next/image';

import { Heart } from '@/components/icons/Heart';
import { Comment } from '@/components/icons/Comment';

import { TypePost } from '../postsData';

interface PostProps {
  post: TypePost;
  active?: boolean;
}

export const Post = ({ post, active }: PostProps) => {
  return (
    <div className={`${styles.container} ${active ? styles.active : ''}`}>
      <Image src={post.src} alt={post.title} width={370} height={370} />
      <div className={styles.ratings}>
        <div className={styles.likes}>
          <Heart />
          <span>{post.likes}</span>
        </div>
        <div className={styles.comments}>
          <Comment />
          <span>{post.comments}</span>
        </div>
      </div>
      <h4>{post.title}</h4>
      <p>{post.description}</p>
    </div>
  );
};
