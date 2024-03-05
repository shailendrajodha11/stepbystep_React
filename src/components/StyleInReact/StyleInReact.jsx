import React from "react";
import ReactDOM from 'react-dom/client'
import './External.css'
import style from './Modualrcss.module.css'

function StyleInReact(){
    return(
        <div>
            <h1 className="external">External Style</h1>
            <h1 style={{backgroundColor:'black', color:'goldenrod'}}>Inline CSS</h1>
            <h1 className={style.success}>Modular CSS</h1>
        </div>
    )
}

export default StyleInReact;