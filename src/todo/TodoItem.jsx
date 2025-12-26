import { useEffect } from "react";
import { useTodoDispatch } from "../context/TodoContext";

export default function TodoItem({ item }) {
  const dispatch = useTodoDispatch();

  // done
  const onToggleTodo = (id, done) => {
    dispatch({ type: "done", id, done });
  };

  //deleted
  const onDeleteTodo = (deleteId) => {
    dispatch({ type: "delete", deleteId });
  };

  useEffect(() => {
    // console.log("컴포넌트가 마운트 되었습니다");
    // 컴포넌트가 언마운트 될때 실행 (함수 리턴사용)
    // return () => {
    //   console.log("컴포넌트가 언마운트 될 예정입니다.");
    // };
  }, []);

  return (
    <label>
      <input
        type="checkbox"
        onChange={(e) => onToggleTodo(item.id, e.target.checked)}
      />
      <span>{item.done ? <del>{item.text}</del> : item.text}</span>
      <button onClick={() => onDeleteTodo(item.id)}>X</button>
    </label>
  );
}
