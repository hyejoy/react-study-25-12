export default function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
  // 얕은 복사를 사용하는 경우 (참조값 대입), stricMode가 2번실행하게 되면서
  // 같은 결과가 나오지 않음 => 순수하지않은 컴포넌트
  // 깊은 복사를 사용하게 되면, 같은 결과 나옴
  return (
    <>
      <ul>
        {todos?.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={(e) => onToggleTodo(item.id, e.target.checked)}
            />
            <span>{item.done ? <del>{item.text}</del> : item.text}</span>
            <button onClick={() => onDeleteTodo(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
