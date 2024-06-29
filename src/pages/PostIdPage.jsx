import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PostService from "../API/PostSerice";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const id = params.post_with_id.slice(5); // post_with_id == post_${id}
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });
  const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const response = await PostService.getPostCommentsById(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(id);
    fetchCommentsById(id);
  }, []);

  // можно реализовать проверку, есть ли что-либо в функции или нет, чтобы потом
  // возвращать объект или сообщение о том, пустой он или нет
  return (
    <div>
      <h1>пост</h1>
      {isPostLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            {post.id}. {post.title}
          </div>
          <h1>Комментарии</h1>
          {isCommentsLoading ? (
            <Loader />
          ) : (
            <div>
              {comments.map((comment) => (
                <div key={comment.id} style={{ marginTop: 15 }}>
                  <h5>{comment.email}</h5>
                  <div>{comment.body}</div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PostIdPage;
