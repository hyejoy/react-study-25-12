import Card from "../Card";

export default function CourseForm() {
  function handlerCourseForm(e) {
    // 리다이렉션 막기
    e.preventDefault();
  }

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
          <input type="text" placeholder="강의제목" />
          <input type="text" placeholder="강의 한줄 설명" />
          <input type="submit" value="등록" />
        </form>
      </Card>
    </>
  );
}
