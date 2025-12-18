export default function todoReducer(draft, action) {
  switch (action.type) {
    case "added": {
      const { nextId, todoText } = action;
      draft.push({ id: nextId, text: todoText, done: false });
      break;
    }
    case "added_index": {
      const { insertAt, nextId, todoText } = action;
      draft.splice(insertAt, 0, {
        id: nextId,
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
      return (draft.find((todo) => todo.id === id).done = done);
    }
    case "reverse": {
      return draft.toReversed();
    }
    default: {
      throw Error("알수 없는 액션 타입 : " + action.type);
    }
  }
}
