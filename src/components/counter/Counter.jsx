// 함수 표현식 vs 함수 선언식

import { useState } from "react";

// 일반적으로 사용
export default function Counter({ handleTotal }) {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    // 값이 중첩되지않고, couter은 이전 state값으로 고정됨
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1); // 0+1

    // 여러번 스테이트를 변경 시 콜백 함수 활용
    // 명명 규칙 : 업데이트 함수 인수의 이름은 state변수의 첫글자로 지정하는 것이 일반적
    // 좀 더 자세한 코드를 선호하는 경우 prev접두사를 사용
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
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
