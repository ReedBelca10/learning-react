import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount((currentState) => currentState + 1);
    }, 1000);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
