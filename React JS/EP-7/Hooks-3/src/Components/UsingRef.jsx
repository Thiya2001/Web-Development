import React, { useEffect, useRef } from 'react'

const UsingRef = () => {
    const countRef = useRef(0);
    const spanRef = useRef(null);

    const handleClick = () => {
        countRef.current++;
        spanRef.current.innerText = countRef.current;
    }

    useEffect(() => {
        console.log("useRef Component Rerendered");
    });

  return (
    <div>
        <button onClick={handleClick}>useRef <span ref={spanRef}>0</span></button>
    </div>
  );
};

export default UsingRef