import React from "react";
import ReactDOM from 'react-dom/client'

class CompoWillUnmount extends React.Component{
    componentWillUnmount(){
        alert("ComponentWillUnmount Called")
    }
    render(){
        return(
            <div>
                <h1>Ye H Component Will Unmount</h1>
            </div>
        )
    }
}

export default CompoWillUnmount;