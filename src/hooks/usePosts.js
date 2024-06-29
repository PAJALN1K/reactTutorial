import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  // при такой логике массив будет отрисовываться на КАЖДЫЙ рендер компонента (даже например на запись хотя бы БУКВЫ в строку input)
  //   function getSortedPosts() {
  //     console.log("Отработала функция сортед постс");
  //     if (selectedSort) {
  //       return [...posts].sort((a, b) =>
  //         a[selectedSort].localeCompare(b[selectedSort])
  //       );
  //     }
  //     return posts;
  //   }
  //   const sortedPosts = getSortedPosts();

  //   const sortPosts = (sort) => {
  //     setSelectedSort(sort);
  //     //     // функция сорт сортирует ДАННЫЙ ей массив, а напрямую изменять состояние нельзя, поэтому просто скопируем старый массив в новый
  //     //     // setPosts(posts.sort());
  //     //     setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  //   };

  const sortedPosts = useMemo(() => {
    // console.log("Отработала функция сортед постс");
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
