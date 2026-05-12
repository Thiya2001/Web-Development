import React from 'react'
import { useState } from 'react'
import List from './List';
import { useCallback } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number + 1, number + 2, number + 3];
  }, [number]);

  const theme = {
    backgroundColor:dark ? "black" : "white",
    color: dark ? "white" : "black", 
  };

  return (
    <div style={theme}>
      <input type="number" 
      value={number}
      onChange={(e) => setNumber(parseInt(e.target.value))} 
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  )
}

export default App