import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("count", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((curr) => curr + 1)}>Add</button>
    </div>
  )
}

export default App