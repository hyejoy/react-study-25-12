import { useState } from "react";
import Counter from "./counter/Counter";

export default function Main() {
  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleTotal = () => {
    setTotal((prev) => prev + 1);
  };

  return (
    <main>
      <p>total Count : {total} </p>
      <p>flag : {String(flag)} </p>
      <button onClick={() => setFlag((prev) => !prev)}>toggle falg</button>
      <Counter handleTotal={handleTotal} />
      <hr />
      <Counter handleTotal={handleTotal} />
      <hr />
      <Counter />
    </main>
  );
}
