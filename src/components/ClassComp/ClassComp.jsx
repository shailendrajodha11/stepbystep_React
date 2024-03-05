import React from "react";
import ReactDOM from 'react-dom/client'

class ClassComp extends React.Component{
    render(){
        return (
            <h1>This is heading from Class component not from Functional Component</h1>
        )
    }
}

export default ClassComp;