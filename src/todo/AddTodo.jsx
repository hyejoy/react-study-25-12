import { useState } from "react";
import { useTodoDispatch } from "../context/TodoContext";
export default function AddTodo() {
  const [todoText, setTodoText] = useState("");

  const dispatch = useTodoDispatch();

  // 1] added
  const handleAddTodo = (text) => {
    dispatch({
      type: "added",
      todoText: text,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
            handleAddTodo(e.target.value);
            setTodoText("");
          }
        }}
      />
      <button
        onClick={() => {
          setTodoText("");
          handleAddTodo(todoText);
        }}
      >
        추가
      </button>
    </div>
  );
}
