import {useRef} from 'react'

const FocusRef = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    const handleClick1 = () => {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "gray";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    };
    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "gray";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    };
    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "gray";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    };

  return (
    <div>
        <input type="text" ref={inputRef1} />
        <button onClick={handleClick1}>click</button>
        <br /><br />
        <input type="text" ref={inputRef2} />
        <button onClick={handleClick2}>click</button>
        <br /><br />
        <input type="text" ref={inputRef3} />
        <button onClick={handleClick3}>click</button>
    </div>
  )
}

export default FocusRef