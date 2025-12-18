import { useReducer, useState } from "react";
import "./App.css";
import TodoList from "./todo/TodoList";
import todoReducer from "./reducer/todo-reducer";

export default function AppTodo() {
  // reducer 사용
  /**
   * 🎯 useReducer
   * const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
   * 첫번째 인자 : 작성한 Reducer 함수
   * 두번째 인자 : 관리할 상태의 초기값
   * 반환한 배열 첫번째 인자 : 관리할 상태
   * 반환한 배열 두번째 인자 : reducer함수를 사용할 dispatch 함수를 받음
   */
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "자바스크립트 공부하기", done: false },
  ]);
  const [todoText, setTodoText] = useState("");
  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  // [1] added
  const handleAddTodo = () => {
    dispatch({
      type: "added",
      nextId: todos.length,
      todoText,
    });
    setTodoText("");
  };

  const handleEnterTodo = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
      handleAddTodo();
    }
  };
  // [2]  added_index
  const handleAddTodoByIndex = () => {
    dispatch({
      type: "added_index",
      insertAt,
      nextId: todos.length,
      todoText,
    });
  };

  // [3] deleted
  const handleDelteTodo = (deleteId) => {
    dispatch({
      type: "delete",
      deleteId,
    });
  };

  // [4] done
  const handleToggleTodo = (id, done) => {
    dispatch({
      type: "done",
      id,
      done,
    });
  };

  // [5] reverse
  const handleReverse = () => {
    dispatch({
      type: "reverse",
    });
  };

  return (
    <>
      <h2>할일목록</h2>
      <div>
        <input
          value={todoText}
          type="text"
          onChange={handleTodoTextChange}
          onKeyDown={handleEnterTodo}
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((_, index) => (
            <option key={index} value={index}>
              {index} 번째
            </option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt}번째 추가</button>
      </div>
      <button onClick={handleReverse}>Reverse</button>
      <div> Preview: {todoText} </div>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDelteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </>
  );
}
