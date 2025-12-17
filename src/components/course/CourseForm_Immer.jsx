/* eslint-disable no-unused-vars */
import { useImmer } from "use-immer";
import Card from "../Card";

export default function CourseForm() {
  const [form, updateForm] = useImmer({
    title: "리액트 강의",
    description: "리액트 기초부터 실전까지!",
    info: {
      level: 1,
      skill: "React",
    },
  });

  function handlerCourseForm(e) {
    // 리다이렉션 막기
    e.preventDefault();
  }

  // 🎯 Immer를 사용하여, 콜백함수로부터 전달받은 인자를 통해 현재 객체를 수정
  // Immer가 제공하는 draft는 Proxy 객체타입으로, 객체를 원하는 만큼 자유롭게 변경할수있으며,
  // draft의 어느 부분이 변경되었는지 알아내어 완전히 새로운 객체를 생성함
  const handleChange = (e) => {
    updateForm((draft) => {
      draft[e.target.name] = e.target.value;
    });
  };

  const handleInfoChange = (e) => {
    updateForm((draft) => {
      draft.info[e.target.name] = e.target.value;
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="skill" style={{ width: "100px" }}>
              스킬
            </label>
            <input
              id="skill"
              name="skill"
              type="text"
              value={form.info.skill}
              onChange={handleInfoChange}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="level" style={{ width: "100px" }}>
              레벨
            </label>
            <select name="level" id="level" onChange={handleInfoChange}>
              <option value="0">입문</option>
              <option value="1">초급</option>
              <option value="2">중급</option>
            </select>
          </div>
          <input type="submit" value="등록" />
          {(form.title || form.description || form.info) && (
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
              {form.info.skill && <p>스킬 : {form.info.skill}</p>}
              {form.info.level && <p>레벨 : {form.info.level}</p>}
            </div>
          )}
        </form>
      </Card>
    </>
  );
}
