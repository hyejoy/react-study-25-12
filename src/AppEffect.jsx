import { useEffect, useState } from "react";

function Coursese() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch(`data/course_${filter}.json`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
    // ⭐ 만약 소켓이나 리스너와 같은 연결하는 로직이있다면 clear 함수 필수
    return () => {
      console.log("연결해제");
    };
  }, [filter]);

  const handleRadio = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="all">전체</label>
        <input
          id="all"
          type="radio"
          value="all"
          checked={filter === "all"}
          onChange={handleRadio}
        />
        <label htmlFor="favorite">좋아요</label>
        <input
          id="favorite"
          type="radio"
          value="favorite"
          checked={filter === "favorite"}
          onChange={handleRadio}
        />
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
export default function AppEffect() {
  // 1] DOM 조작하기
  // useEffect(() => {
  // }, []);
  //   const $h2 = document.querySelector("#title");
  //   $h2.textContent = "Data Fetching";

  const [show, setShow] = useState(true);

  return (
    <>
      <h2 id="title">Data list</h2>
      <button onClick={() => setShow((prev) => !prev)}>toggle</button>
      <hr />
      {show && <Coursese />}
    </>
  );
}
