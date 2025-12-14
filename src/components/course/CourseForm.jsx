/* eslint-disable no-unused-vars */
import { useState } from "react";
import Card from "../Card";

export default function CourseForm() {
  const [form, setForm] = useState({
    title: "리액트 강의",
    description: "리액트 기초부터 실전까지!",
  });
  function handlerCourseForm(e) {
    // 리다이렉션 막기
    e.preventDefault();
  }

  const handleTitleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, description: e.target.value });
  };

  // [] 괄호를 객체 정의 안에 사용하여 동적 이름을 가진 프로퍼티를 명시할 수 있다.
  // 📖 need a lecture

  const handleChange = (e) => {
    console.log(e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Card title="강의목록">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          onSubmit={handlerCourseForm}
        >
          <input
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="강의제목"
            value={form.title}
          />
          <input
            name="description"
            onChange={handleChange}
            type="text"
            placeholder="강의 한줄 설명"
            value={form.description}
          />
          <input type="submit" value="등록" />
          {(form.title || form.description) && (
            <div
              style={{
                marginTop: "16px",
                backgroundColor: "#eee",
                borderRadius: "6px",
                padding: "16px",
              }}
            >
              {form.title && <p>제목 : {form.title}</p>}
              {form.description && <p>설명 : {form.description}</p>}
            </div>
          )}
        </form>
      </Card>
    </>
  );
}
