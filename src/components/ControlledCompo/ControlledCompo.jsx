import React, { useState } from "react";

function ControlledCompo() {
    const [val, setVal] = useState("000")
    const [item, setItem] = useState("")

    function ValGet(e){
        setVal(e.target.value);
    }
  return (
    <div>
      <h1>Controlled Component</h1>
      <input type="text" value={val} onChange={ValGet}/> <br/>
      <input type="text" value={item} onChange={(e)=>{setItem(e.target.value)}} />
      <h4>Value1: {val}</h4>
      <h4>Item1: {item}</h4>
    </div>
  );
}

export default ControlledCompo;
