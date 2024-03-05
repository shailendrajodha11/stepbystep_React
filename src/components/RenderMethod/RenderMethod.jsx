import React from "react";
import ReactDOM from 'react-dom/client'

class RenderMethod extends React.Component{
    constructor(){
        super()
        this.state={
            email:"shailendra@test.com"
        }
    }
    render(){
        // console.log("Render Method",this.props)
        // return(
        //     <h1>Hello World {this.props.name}</h1>
        // )

        console.log("Render Method", this.state.email)
        return(
            <div>
                <h1>User Component</h1>
                <button onClick={()=>this.setState({email:"jodhaji@test.com"})}>Update Mail</button>
            </div>
        )
    }
}

export default RenderMethod;