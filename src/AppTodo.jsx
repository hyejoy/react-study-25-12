// import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./todo/AddTodo";
import TodoList from "./todo/TodoList";
// reducer 사용
export default function AppTodo() {
  return (
    <TodoProvider>
      <h2>할일목록</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}
