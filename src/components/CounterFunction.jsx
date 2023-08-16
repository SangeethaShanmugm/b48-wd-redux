import React, { useState, useEffect } from "react";
import { store } from "../store/store";
import { increment, decrement } from "../store/actions/CounterAction";
function CounterFunction() {
  const [counter, setCounter] = useState(0);
  // const [state, setState] = useState(initialvalue)

  useEffect(() => {
    updateState();
    store.subscribe(updateState);
  }, []);

  function updateState() {
    const state = store.getState();
    console.log(state);
    setCounter(state.counter);
  }

  function onIncrement() {
    store.dispatch(increment());
  }
  function onDecrement() {
    store.dispatch(decrement());
  }
  return (
    <div>
      <h1>CounterFunction</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default CounterFunction;
