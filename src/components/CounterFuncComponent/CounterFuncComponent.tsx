import React, { useState, useEffect } from "react";

const getStateFromLocalStorage = () => {
  let state = localStorage.getItem("count");
  if (!state) return 0;
  return +state;
};

type Props = {
  max: number;
  step: number;
};

const CounterFuncComponent: React.FC<Props> = ({ max, step }) => {
  const [count, setCount] = useState<number>(getStateFromLocalStorage());

  const increment = () =>
    setCount((prevCount) => (prevCount >= max ? prevCount : prevCount + step));
  const decrement = () =>
    setCount((prevCount) => (prevCount === 0 ? prevCount : prevCount - step));
  const reset = () => setCount(() => 0);

  const updateDocTitle = () => {
    document.title = `Count: ${count}`;
    localStorage.setItem("count", count.toString());
  };

  useEffect(updateDocTitle, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default CounterFuncComponent;
