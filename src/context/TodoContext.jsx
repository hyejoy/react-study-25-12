import { createContext, useContext } from "react";
import todoImmerReducer from "../reducer/todo-immerReducers";
import { useImmerReducer } from "use-immer";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext(null); // todos
export const TodoDispatchContext = createContext(null); //dispatch함수 관리

export function TodoProvider({ children }) {
  const [todos, dispatch] = useImmerReducer(todoImmerReducer, [
    { id: uuidv4(), text: "HTML&CSS 공부하기", done: false },
    { id: uuidv4(), text: "자바스크립트 공부하기", done: false },
  ]);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
