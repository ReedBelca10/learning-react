import { useState } from "react";

const UseStateBasics = () => {

  const [count, setCount] = useState(0);

  const onHandleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" className="btn" onClick={onHandleClick}>Increase</button>
    </div>
  );
};

export default UseStateBasics;
