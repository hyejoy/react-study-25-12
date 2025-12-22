import { useState } from "react";
import "./App.css";
import TodoList from "./todo/TodoList";
import AddTodo from "./todo/AddTodo";

export default function AppTodo() {
  const [todos, setTodos] = useState([
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

  // const [insertAt, setInsertAt] = useState(todos.length - 1);

  // [1] added
  const handleAddTodo = (todoText) => {
    if (!todoText.length) return;
    // 상태변경은 새로운 메모리를 할당해서 업데이트 해야한다.
    // 배열같은 경우는 새로운 배열주소를 할당해주는
    // 스프레드, concat, filter, map을 사용한다.
    const nextId = todos.length;
    setTodos((prev) => [...prev, { id: nextId, text: todoText }]);
  };

  // [2]  added_index
  // const handleAddTodoByIndex = () => {
  //   if (!todoText) return;
  //   const nextId = todos.length;
  //   const newTodos = [
  //     ...todos.slice(0, insertAt), // 삽입이전
  //     { id: nextId, text: todoText, done: false },
  //     ...todos.slice(insertAt, todos.length), // 삽입이후
  //   ];

  //   setTodos(newTodos);
  //   setTodoText("");
  //   console.log(newTodos);
  // };

  // const handleAddTodoOnEnter = (e) => {
  //   if (e.key === "Enter") {
  //     handleAddTodo();
  //   }
  // };

  // const handleTodoTextChange = (e) => {
  //   setTodoText(e.target.value);
  // };

  // [3] deleted
  const handleDelteTodo = (deleteId) => {
    const newTodos = todos.filter((todo) => todo.id !== deleteId);
    setTodos(newTodos);
  };

  // [4] done
  const handleToggleTodo = (id, done) => {
    console.log("실행");
    const doneTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, done: done } : todo
    );
    setTodos(doneTodo);
  };

  // [5] reverse
  // const handleReverse = () => {
  //   // reverse 함수 (뮤터블 함수)는 원본데이터가 변경되기때문에, 새로운 배열을 생성한 후에 사용함
  //   // const nextTodo = [...todos];
  //   // nextTodo.reverse();

  //   // toReversed 함수 (이뮤터블 함수)는 원본데이터가 변경되지않고, 새로운 배열을 생성한다.
  //   const nextTodo = todos.toReversed();

  //   setTodos(nextTodo);
  // };

  // 🎯 function howToUseImmer(id, boolean) {
  // const myList = [
  //   { id: 1, title: "Mona Lisa", seen: false },
  //   { id: 2, title: "Starry Night", seen: true },
  // ];

  //   updateMyList(draft => {
  //     const artwork = draft.find(a =>
  //       a.id === id;
  //     )
  //     artwork.seen = boolean.;
  //   })
  // }

  return (
    <>
      <h2>할일목록</h2>
      <AddTodo onhandleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDelteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </>
  );
}
