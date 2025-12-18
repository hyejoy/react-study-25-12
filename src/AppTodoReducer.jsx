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
