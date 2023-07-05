import styles from './styles.module.scss';

import { useEffect, useState } from 'react';
import { useMedia } from '@/hooks/useMedia';

import { ArrowPrev } from '@/components/icons/ArrowPrev';
import { ArrowNext } from '@/components/icons/ArrowNext';

import { Post } from '../Post';
import { postsData, TypePost } from '../postsData';

export const Carousel = () => {
  const [posts, setPosts] = useState<TypePost[]>(postsData);
  const [activePosts, setActivePosts] = useState<number[] | null>(null);
  const windowWidth = useMedia('(max-width: 55rem)');

  useEffect(() => {
    if (windowWidth) {
      setActivePosts([Math.floor(postsData.length / 2)]);
    } else {
      setActivePosts(() => {
        const middlePost = Math.floor(postsData.length / 2);
        return [middlePost - 1, middlePost, middlePost + 1];
      });
    }
  }, [posts, windowWidth]);

  const handlePrevPost = () => {
    setPosts((currentPosts) => {
      const [prevPost, ...updatedPosts] = currentPosts;
      return [...updatedPosts, prevPost];
    });
  };

  const handleNextPost = () => {
    setPosts((currentPosts) => {
      const updatedPosts = [...currentPosts];
      const nextPost = updatedPosts.pop()!;
      return [nextPost, ...updatedPosts];
    });
  };

  return (
    <div className={styles.carousel}>
      {posts.map((post, index) => (
        <Post
          key={post.title}
          post={post}
          active={activePosts?.includes(index)}
        />
      ))}
      <ArrowPrev className={styles.prev} onClick={handlePrevPost} />
      <ArrowNext className={styles.next} onClick={handleNextPost} />
    </div>
  );
};
