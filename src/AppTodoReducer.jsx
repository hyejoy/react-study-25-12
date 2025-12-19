import { useState } from "react";
import "./App.css";
import TodoList from "./todo/TodoList";
import todoImmerReducer from "./reducer/todo-immerReducers";
import { useImmerReducer } from "use-immer";

// reducer 사용
export default function AppTodo() {
  const [todos, dispatch] = useImmerReducer(todoImmerReducer, [
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

  const handleAddTodoOnEnter = (e) => {
    // 문자 조합중인지 알아내는 속성
    console.log("isComposint:", e.nativeEvent.isComposing);

    // 문자가 조합중이 아닐때만 등록
    // 브라우저 버전이 상이해 이벤트가 2번발생하는 이슈(사용자마다 나타날수도, 안나타날수도 있음)로 인해 처리
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
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
    setTodoText("");
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
          onKeyDown={handleAddTodoOnEnter}
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
