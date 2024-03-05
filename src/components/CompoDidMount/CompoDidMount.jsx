import React from "react";
import ReactDOM from 'react-dom/client'

class CompoDidMount extends React.Component{
    constructor(){
        super();
        console.log("Constructor")
    }
    componentDidMount(){
        console.log("ComponentDidMount");
    }
    render(){
        console.log("Render");
        return(
            <h1>Hi, I Am Shailendra</h1>
        )
    }
}

export default CompoDidMount;