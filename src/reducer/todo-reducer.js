export default function todoReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const { nextId, todoText } = action;
      return [...todos, { id: nextId, text: todoText }];
    }
    case "added_index": {
      const { insertAt, nextId, todoText } = action;
      return [
        ...todos.slice(0, insertAt), // 삽입이전
        { id: nextId, text: todoText, done: false },
        ...todos.slice(insertAt, todos.length), // 삽입이후
      ];
    }
    case "delete": {
      const { deleteId } = action;
      return todos.filter((todo) => todo.id !== deleteId);
    }
    case "done": {
      const { id, done } = action;
      return todos.map((todo) =>
        todo.id === id ? { ...todo, done: done } : todo
      );
    }
    case "reverse": {
      return todos.toReversed();
    }
    default: {
      throw Error("알수 없는 액션 타입 : " + action.type);
    }
  }
}
