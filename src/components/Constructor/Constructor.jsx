import React from "react";
import ReactDOM from 'react-dom/client'

class Constructor extends React.Component{
    constructor(){
        super();
        this.state = {
            data : "Shailendra"
        }
    }
    render(){
        return(
            <h1>Hello i am {this.state.data}</h1>
        )
    }
}

export default Constructor;