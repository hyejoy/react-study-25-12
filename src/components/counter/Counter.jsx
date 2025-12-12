// 함수 표현식 vs 함수 선언식

import { useState } from "react";

// 일반적으로 사용
export default function Counter({ handleTotal }) {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
    if (handleTotal) {
      handleTotal();
    }
  };
  // 상태 , 로직이 포함된경우
  return <button onClick={handleCounter}>counter : {counter}</button>;
}

// UI만 담당하는 컴포넌트
// export const Counter = () => <button>Counter</button>;
// export default Counter;
