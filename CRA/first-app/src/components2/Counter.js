import { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {

    const [counter,setCounter] = useState(0)

    const counterUpdate = (amount) => {
      setCounter(counter + amount);
    }

    useEffect(()=> {
      console.log(counter)
    },[counter]) // קורה בכל פעם שהמשתנים שנמצאים בתוך הסגוריים המרובעות (אחד מהם) מתעדכן.

    useEffect(() => {

    }, []) // קורה רק פעם אחת לפני שהקומפוננטה סיימה להיטען
    
  return (

    <div className="counter-wrapper">
      {/* {counter > 100 ? <span>reached to the high score</span> : <span>{counter}</span>} */}

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
