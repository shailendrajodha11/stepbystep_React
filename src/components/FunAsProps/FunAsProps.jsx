import React from "react";
import ReactDOM from 'react-dom/client'

function FunAsProps(props){
    return (
        <div>
            <h1>Shailendra Singh Jodha</h1>
            <button onClick={props.data}>Call the Function</button>
        </div>
    )
}

export default FunAsProps;