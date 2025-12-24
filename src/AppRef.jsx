// useRef는 단일 프로퍼티(current)를 가진 객체를 반환함
// useRef는 값이 변경되어도 리랜더링이 발생하지 않는다.
// UI에 관련되지 않는 값을 참조하고 있는게 베스트
import { useEffect, useRef, useState } from "react";

// let counter = 0;

function ButtonCounter() {
  const countRef = useRef(0);

  const [count, setCount] = useState(0);

  console.log("✅ 리렌더링!");

  const handleClick = () => {
    countRef.current++;
    console.log("countRef: ", countRef.current);
    // counter++;
    // console.log('counter: ', counter);
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Count</button>;
}

function Form() {
  const [form, setForm] = useState({
    title: "제목",
    author: "",
    content: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const contentTextareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DOM: ", titleInputRef.current);
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
    console.log("✅ 저장 성공~!");
  };

  useEffect(() => {
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
  }, []);

  // 값에내용 없을때 자동 포커스
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>글쓰기</legend>
        <input
          ref={titleInputRef}
          name="title"
          placeholder="제목"
          value={form.title}
          onChange={handleForm}
        />
        <hr />
        <input
          ref={authorInputRef}
          name="author"
          placeholder="작성자"
          value={form.author}
          onChange={handleForm}
        />
        <hr />
        <textarea
          ref={contentTextareaRef}
          name="content"
          placeholder="내용"
          value={form.content}
          onChange={handleForm}
        />
        <hr />
        <button>전송</button>
      </fieldset>
    </form>
  );
}

export default function AppRef() {
  return (
    <>
      <h2>Count</h2>
      <ButtonCounter />
      <ButtonCounter />
      <h2>Form</h2>
      <Form />
    </>
  );
}
