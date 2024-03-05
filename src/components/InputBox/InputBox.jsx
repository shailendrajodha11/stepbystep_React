import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function InputBox() {
  const [input, setInput] = useState(null);
  const [print,setPrint] = useState(false);

  function changeval(val) {
    setInput(val.target.value);
  }
//   function getdata(){
//     // setInput(val.target.value)
//     console.log(input)
//   }

  return (
    <div>
      <input onChange={changeval} placeholder="Enter your text here" />
      <button onClick={()=>{setPrint(true)}}>Print Data</button>
      {
        print?<h1>{input}</h1>: null
      }
    </div>
  );
}

export default InputBox;
