import React, { useEffect, useState } from "react";
import                                     "../styles/App.css";
import PostService                    from "../API/PostSerice";
import PostList                       from "../components/PostList";
import PostForm                       from "../components/PostForm";
import PostFilter                     from "../components/PostFilter";
import MyModal                        from "../components/UI/modal/MyModal";
import MyButton                       from "../components/UI/button/MyButton";
import Loader                         from "../components/UI/loader/Loader";
import Pagination                     from "../components/UI/pagination/Pagination";
import { usePosts }                   from "../hooks/usePosts";
import { useFetching }                from "../hooks/useFetching";
import { getPagesCount }              from "../utils/pages";
// import { getPosts, createPost, getImages, getPostsController } from '../lesson-api/request';

function Posts() {
  //   # axios lesson
  //   useEffect(()=> {
  //     getPosts();
  //     createPost();
  //     getImages();
  //     getPostsController.abort();
  //   }, [])

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  //   const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [fetchPosts, isPostsLoading, postsError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
      // console.log(response.headers["x-total-count"]);
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);
  //   }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //   async function fetchPosts() {
  //     setIsPostsLoading(true);
  //     setTimeout(async () => {
  //       const posts = await PostService.getAll();
  //       setPosts(posts);
  //       setIsPostsLoading(false);
  //     }, 2000);
  //   }

  const removePost = (wantedPost) => {
    setPosts(posts.filter((post) => post.id !== wantedPost.id));
  };

  const changePage = (page) => {
    setPage(page);
    // По идее здесь нужно было бы включить эту функцию, но поскольку в Реакте все изменения состояния - асинхронные процессы, которые
    // происходят с некоторой задержкой (нужно применить сразу ВСЕ изменения, поэтому реакт какое-то время
    // ждёт, и потом уже применяет последнее или что-то в этом духе). Один из способов решить эту проблему -
    // воспользоваться useEffect, загрузив туда страницы. Второй способ - передать limit и page в fetch posts
    // fetchPosts();
    fetchPosts(limit, page);
  };

  // условная отрисовка с помощью тернарного оператора (если есть посты, то отобразить их, иначе вывести надпись)
  return (
    <div className="App">
      {/* <MyButton onClick={fetchPosts}>GET POSTS</MyButton> */}
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postsError && <h1>Произошла ошибка {postsError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Посты про JS"
        />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
