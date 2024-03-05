import React from "react";
import ReactDOM from 'react-dom/client'

function ClickEve(){
    function getdata(v){
        alert("Here is the alert");
    }
    return (
        // <button onClick={getdata}>Click Me</button>
        <button onClick={()=>{alert('This button was clicked')}}>Alert Button</button> 
    )
}

export default ClickEve;