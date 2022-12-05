import { useState } from "react";
import "./Counter.css";

const Counter = () => {

    const [counter,setCounter] = useState(0)

    const counterUpdate = (amount) => {
        setCounter(counter + amount);
    }

  return (
    <div className="counter-wrapper">
        <span>{counter}</span>
      <div className="buttonGroup">
        <button onClick={() => counterUpdate(1)}>+1</button>
        <button onClick={() => counterUpdate(-1)}>-1</button>
      </div>
      <div className="buttonGroup">
        <button onClick={() => counterUpdate(5)}>+5</button>
        <button onClick={() => counterUpdate(-5)}>-5</button>
      </div>
      <div className="buttonGroup">
        <button onClick={() => counterUpdate(10)}>+10</button>
        <button onClick={() => counterUpdate(-10)}>-10</button>
      </div>
    </div>
  );
};

export default Counter;
