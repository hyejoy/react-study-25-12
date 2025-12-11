import { useState } from "react";
import Counter from "./Counter";

export default function Main() {
  const [total, setTotal] = useState(0);
  const handleTotal = () => {
    setTotal((prev) => prev + 1);
  };

  return (
    <main>
      <p>total Count : {total} </p>
      <Counter handleTotal={handleTotal} />
      <br />
      <Counter handleTotal={handleTotal} />
    </main>
  );
}
