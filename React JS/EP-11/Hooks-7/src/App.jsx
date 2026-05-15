import React, { useReducer, useState } from 'react'

function reducerFn(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
      default:
        return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducerFn, { count: 1});
  const [count, setCount] = useState(1);

  const increment = () => {
    // setCount((curr) => curr + 1);
    dispatch({ type: "increment"});
  };

  const decrement = () => {
    // setCount((curr) => curr - 1);
    dispatch({ type: "decrement"});
  };

  console.log(state);
  
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button onClick={decrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App; 