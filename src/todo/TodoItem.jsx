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
