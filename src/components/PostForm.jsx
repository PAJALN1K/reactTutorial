import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });

  function addNewPost(evt) {
    evt.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  }
  // const bodyInputRef = useRef();
  // console.log(bodyInputRef.current.value);

  return (
    <form>
      {/* Управляемый элемент */}
      {/* Элемент формы input, управляемый React — это управляемый компонент. Когда пользователь вводит данные в управляемый компонент, 
      обработчик события изменений приходит в действие, и ваш код определяет допустим ли ввод (повторно рендерясь с обновлённым значением). 
      Если повторный рендеринг не происходит, элемент формы остаётся без изменений. */}
      <MyInput
        value={post.title}
        onChange={(evt) => setPost({ ...post, title: evt.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(evt) => setPost({ ...post, body: evt.target.value })}
        type="text"
        placeholder="Описание поста"
      />

      {/* Неуправляемый элемент, получает данные DOM-дерева */}
      {/* Неуправляемый компонент работает как обычный элемент формы вне React. Когда пользователь вводит данные в поле формы 
      (поле ввода, выпадающий список и т. д.), обновлённая информация отображается без помощи React. Однако, это также значит, что 
      некоторые значения не могут быть применены. */}
      {/* <input ref={bodyInputRef} type="text"/> */}
      {/* <MyInput 
            type="text" 
            placeholder='Описание поста'
            ref={bodyInputRef}
            /> */}
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}

export default PostForm;
