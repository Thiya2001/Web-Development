import React,{useState} from 'react'

const App = () => {
  const [num, setNum] = useState(1);
  let x = 1;
  const btnClick = () => {
    // x = x + 1;
    // console.log("X =", x);
    setNum(num + 1);
    // setNum((currValue) => {
    //   return currValue + 1;
    // })
  }
  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}>Add</button>
    </div>
  )
}

export default App
