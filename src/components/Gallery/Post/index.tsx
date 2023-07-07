import styles from './styles.module.scss';

import Image from 'next/image';

import { IconHeart } from '@/components/Icons/IconHeart';
import { IconComment } from '@/components/Icons/IconComment';

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
          <IconHeart />
          <span>{post.likes}</span>
        </div>
        <div className={styles.comments}>
          <IconComment />
          <span>{post.comments}</span>
        </div>
      </div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
};
