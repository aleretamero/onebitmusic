import styles from './styles.module.scss';

import Image from 'next/image';

import { IconHeart, IconLikedHeart } from '@/components/Icons/IconHeart';
import { IconComment } from '@/components/Icons/IconComment';

import { TypePost } from '../postsData';

interface PostProps {
  post: TypePost;
  active?: boolean;
  onClick: (title: string) => void;
  setActivePost?: () => void;
}

export const Post = ({ post, active, onClick, setActivePost }: PostProps) => {
  return (
    <div
      className={`${styles.container} ${
        active ? styles.active : styles.inactive
      }`}
      onClick={setActivePost}
    >
      <Image
        src={post.src}
        alt={post.title}
        width={370}
        height={370}
        quality={100}
      />
      <div className={styles.ratings}>
        <div className={styles.likes}>
          {post.isLiked ? (
            <IconLikedHeart
              onClick={active ? () => onClick(post.title) : undefined}
              className={`${styles.iconLike} ${styles.liked}`}
            />
          ) : (
            <IconHeart
              onClick={active ? () => onClick(post.title) : undefined}
              className={styles.iconLike}
            />
          )}
          <span>{post.isLiked ? post.likes + 1 : post.likes}</span>
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
