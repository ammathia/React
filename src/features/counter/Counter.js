import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import "./Counter.scss";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <div className="divRed">
      <p
        style={{
          display: "inline",
          marginBlockStart: "0",
          marginBlockEnd: "0",
        }}
      >
        {count}
      </p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <br />

        <input
          value={addValue}
          onChange={(e) => setIncrementAmount(e.target.value)}
          type="text"
        />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
