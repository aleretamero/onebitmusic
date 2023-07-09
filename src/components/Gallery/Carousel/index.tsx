import styles from './styles.module.scss';

import { useEffect, useState } from 'react';
import { useMedia } from '@/hooks/useMedia';

import { IconArrowPrev } from '@/components/Icons/IconArrowPrev';
import { IconArrowNext } from '@/components/Icons/IconArrowNext';

import { Post } from '../Post';
import { postsData, TypePost } from '../postsData';

export const Carousel = () => {
  const [posts, setPosts] = useState<TypePost[]>(postsData);

  const [activePosts, setActivePosts] = useState<number[] | null>(null);
  const windowWidth = useMedia('(max-width: 64rem)');

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

  useEffect(() => {
    const storageValue = localStorage.getItem('@onebitmusic-posts');

    if (storageValue) {
      setPosts(JSON.parse(storageValue));
    }
  }, []);

  const handleChangeLike = (title: string) => {
    const updatedPosts = [...posts];

    const indexPost = updatedPosts.findIndex((value) => value.title === title);
    updatedPosts[indexPost].isLiked = !updatedPosts[indexPost].isLiked;

    localStorage.setItem('@onebitmusic-posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  const handleActivePost = (index: number) => {
    if (activePosts?.includes(index)) return;

    const postsNumber = windowWidth ? 1 : 2;

    if (index === Math.floor(postsData.length / 2) - postsNumber) {
      handlePrevPost();
    }

    if (index === Math.floor(postsData.length / 2) + postsNumber) {
      handleNextPost();
    }
  };

  const handlePrevPost = () => {
    setPosts((currentPosts) => {
      const updatedPosts = [...currentPosts];
      const nextPost = updatedPosts.pop()!;
      return [nextPost, ...updatedPosts];
    });
  };

  const handleNextPost = () => {
    setPosts((currentPosts) => {
      const [prevPost, ...updatedPosts] = currentPosts;
      return [...updatedPosts, prevPost];
    });
  };

  return (
    <div className={styles.carousel}>
      <IconArrowPrev className={styles.prev} onClick={handlePrevPost} />
      <IconArrowNext className={styles.next} onClick={handleNextPost} />
      {posts.map((post, index) => (
        <Post
          key={post.title}
          post={post}
          onClick={handleChangeLike}
          active={activePosts?.includes(index)}
          setActivePost={() => handleActivePost(index)}
        />
      ))}
    </div>
  );
};
