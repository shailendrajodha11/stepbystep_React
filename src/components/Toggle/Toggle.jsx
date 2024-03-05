import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function Toggle() {
  const [status, setStatus] = React.useState(false);
  return (
    <div className="toggle">
      {
        status ? <h1>Hello, Shailendra Singh Jodha.</h1> : null
      }

      {/* <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button> */}

      <button onClick={()=>{setStatus(!status)}}>Toggle</button>
    </div>
  );
}

export default Toggle;