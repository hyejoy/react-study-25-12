import { useState } from "react";

export default function AppMovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        console.log("client X :", e.clientX);
        console.log("client Y :", e.clientY);
        // 객체를 업데이트 하고 싶을 때는 새로운 객체를 넣어야 한다.
        // 절대 기존값을 변경해서는 안된다.
        setPosition({ x: e.clientX, y: e.clientY });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
