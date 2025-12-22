import { createContext, useState } from "react";

/**
 * 자주 변경되지 않는 데이터를 컨텍스트 상태로 사용하는것이 좋다
 * 꼭 필요한 섹션에서만 사용하는 것이 좋다. (최대한 가까운 부모컴포넌트)
 * props를 여러 레벨 깊이 전달해야 한다고해서 해당정보를 Context에 넣어야하는것은 아님 (리랜더링 자주발생하는 이슈때문)
 */
export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
