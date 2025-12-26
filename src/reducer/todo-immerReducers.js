import { v4 as uuidv4 } from "uuid";
// draft는 immer 객체로 넘겨받음
export default function todoReducer(draft, action) {
  switch (action.type) {
    case "added": {
      const { todoText } = action;
      draft.push({ id: uuidv4(), text: todoText, done: false });
      break;
    }
    case "added_index": {
      const { insertAt, todoText } = action;
      draft.splice(insertAt, 0, {
        id: uuidv4(),
        text: todoText,
        done: false,
      });
      break;
    }
    case "delete": {
      const { deleteId } = action;

      return draft.filter((todo) => todo.id !== deleteId);
    }
    case "done": {
      const { id, done } = action;
      draft.find((todo) => todo.id === id).done = done;
      break;
    }
    case "reverse": {
      draft.toReversed();
      break;
    }
    default: {
      throw Error("알수 없는 액션 타입 : " + action.type);
    }
  }
}
