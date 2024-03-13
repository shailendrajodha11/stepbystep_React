import React, { useState } from "react";

function HighOrderCompo(){
    return(
        <div id="main">
            <h1>Shailendra Singh Jodha</h1>
            {/* <Counter/> */}
            <HOCRed cmp={Counter}/>
        </div>
    )
};

export default  HighOrderCompo;

function HOCRed(){
    return(
        <h1>Count : {}</h1>
    )
}

function Counter(){
    const [count, setCount] = useState(0);
    return(
        <button onClick={()=>setCount(count+1)}>Click Me</button>
    )
}