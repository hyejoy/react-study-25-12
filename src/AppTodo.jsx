import { useState } from "react";
import "./App.css";
import TodoList from "./todo/TodoList";

export default function AppTodo() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleAddTodo = () => {
    if (!todoText.length) return;
    // 상태변경은 새로운 메모리를 할당해서 업데이트 해야한다.
    // 배열같은 경우는 새로운 배열주소를 할당해주는
    // 스프레드, concat, filter, map을 사용한다.
    const nextId = todos.length;
    setTodos((prev) => [...prev, { id: nextId, text: todoText }]);
    setTodoText(""); // null, undefined [x]
  };

  const handleAddTodoByIndex = () => {
    if (!todoText) return;
    const nextId = todos.length;
    const newTodos = [
      ...todos.slice(0, insertAt), // 삽입이전
      { id: nextId, text: todoText, done: false },
      ...todos.slice(insertAt, todos.length), // 삽입이후
    ];

    setTodos(newTodos);
    setTodoText("");
    console.log(newTodos);
  };

  const handleEnterTodo = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
      handleAddTodo();
    }
  };

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleDelteTodo = (deleteId) => {
    const newTodos = todos.filter((todo) => todo.id !== deleteId);
    setTodos(newTodos);
  };

  const handleToggleTodo = (id, done) => {
    console.log("실행");
    const doneTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, done: done } : todo
    );
    setTodos(doneTodo);
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
      <div> Preview: {todoText} </div>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDelteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </>
  );
}
