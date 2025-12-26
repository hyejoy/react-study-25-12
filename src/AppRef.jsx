// useRef는 단일 프로퍼티(current)를 가진 객체를 반환함
// useRef는 값이 변경되어도 리랜더링이 발생하지 않는다.
// UI에 관련되지 않는 값을 참조하고 있는게 베스트
import { forwardRef, useEffect, useRef, useState } from "react";

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

// 커스텀 컴포넌트를 참조할때는 forward ref 메소드를 활용하여 참조 가능
// forward ref 메소드로 감싸주면 됨
// return 부분에서 참조하고싶은곳에 ref 사용
const MyForm = forwardRef((props, ref) => {
  MyForm.displayName = "MyForm";

  const [form, setForm] = useState({
    title: "제목",
    author: "짐코딩",
    content: "",
  });

  const [isChanged, setIsChange] = useState(false);
  const prevForm = useRef(null);

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

  // 값에내용 없을때 자동 포커스
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

  useEffect(() => {
    // 폼 값 변경되었는지 확인하기 위해 사용
    prevForm.current = { ...form };
  }, []);

  useEffect(() => {
    setIsChange(
      prevForm.current.title !== form.title ||
        prevForm.current.author !== form.author ||
        prevForm.current.content !== form.content
    );
  }, [form]);

  return (
    <form onSubmit={handleSubmit} ref={ref}>
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
        <button disabled={!isChanged}>전송</button>
      </fieldset>
    </form>
  );
});

export default function AppRef() {
  const myForRef = useRef(null);

  useEffect(() => {
    console.log("myForRef ..>", myForRef);
  }, []);

  return (
    <>
      <h2>Count</h2>
      <ButtonCounter />
      <ButtonCounter />
      <h2>Form</h2>
      <MyForm ref={myForRef} />
    </>
  );
}
