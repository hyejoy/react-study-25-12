import TodoItem from "./TodoItem";
import { useTodos } from "../context/TodoContext";
import { useMemo, useState } from "react";

export default function TodoList() {
  // 얕은 복사를 사용하는 경우 (참조값 대입), stricMode가 2번실행하게 되면서
  // 같은 결과가 나오지 않음 => 순수하지않은 컴포넌트
  // 깊은 복사를 사용하게 되면, 같은 결과 나옴

  const [isDone, setIsDone] = useState(false);

  const handleCheckBox = (e) => {
    setIsDone(e.target.checked);
  };
  const todos = useTodos();
  const doneTodos = todos.filter((item) => item.done);

  const getFilteredTodos = () => {
    if (!isDone) {
      return todos;
    }
    return doneTodos;
  };

  const filteredTodos = getFilteredTodos();

  const getStatusCount = () => {
    // Count 값이 변경되지않아도 랜더링 될때마다 계속 새로 실행 ->
    // 성능 최적화 __ 해결방법 => useMemo
    console.log("getStatusCount 함수 실행!");
    const totalCount = todos.length;
    const doneCount = doneTodos.length;
    return {
      totalCount,
      doneCount,
    };
  };

  const { totalCount, doneCount } = useMemo(
    () =>
      // 패싱할 결과 값 리턴
      getStatusCount(),
    // 두번째 매개변수에 아무것도 넣지 않게 된다면
    // 초기 렌더링 될때만 실행되고 계속 캐싱되어 있는 데이터를 가져옴
    [todos]
  );

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="isDone"
          checked={isDone}
          onChange={handleCheckBox}
        />
        <label htmlFor="isDone">
          완료된 항목 보기 {`${totalCount} / ${doneCount}`}
        </label>
      </div>
      <ul>
        {filteredTodos.map((item) => (
          <li key={item.id}>
            <TodoItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
