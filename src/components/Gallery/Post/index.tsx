import styles from './styles.module.scss';

import Image from 'next/image';

import { motion, useMotionValue, useTransform } from 'framer-motion';

import { IconHeart, IconLikedHeart } from '@/components/Icons/IconHeart';
import { IconComment } from '@/components/Icons/IconComment';

import { TypePost } from '../postsData';

interface PostProps {
  post: TypePost;
  active?: boolean;
  onClick: (title: string) => void;
  handlePrevPost: () => void;
  handleNextPost: () => void;
  setActivePost?: () => void;
}

export const Post = ({
  post,
  active,
  onClick,
  setActivePost,
  handleNextPost,
  handlePrevPost,
}: PostProps) => {
  const x = useMotionValue(0);
  const isLeft = useTransform(x, (value) => value < 0);
  const isRight = useTransform(x, (value) => value > 0);

  const handleDragEnd = () => {
    if (isLeft.get()) {
      handleNextPost();
    }

    if (isRight.get()) {
      handlePrevPost();
    }
  };

  return (
    <motion.div
      className={`${styles.container} ${
        active ? styles.active : styles.inactive
      }`}
      onClick={setActivePost}
      drag="x"
      dragElastic={0.02}
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, cursor: 'grab' }}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      <Image
        src={post.src}
        alt={post.title}
        width={370}
        height={370}
        quality={100}
        style={{ objectFit: 'cover' }}
        draggable={false}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP85uxRDwAFugICHUWwcwAAAABJRU5ErkJggg=="
      />
      <div className={styles.ratings}>
        <div
          className={styles.likes}
          onClick={active ? () => onClick(post.title) : undefined}
        >
          {post.isLiked ? (
            <IconLikedHeart className={`${styles.iconLike} ${styles.liked}`} />
          ) : (
            <IconHeart className={styles.iconLike} />
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
    </motion.div>
  );
};
