import React from "react";
import ReactDOM from 'react-dom/client'

class CompShouldUpdate extends React.Component{
    constructor(){
        super();
        this.state={
            count:1
        }
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate", this.state.count)
        // return false;    By Default
        if(this.state.count>3 && this.state.count<10){
            return true;
        }
    }
    render(){
        return(
            <div>
                <h1>Component Should Update {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Click Me</button>
            </div>

        )
    }
}

export default CompShouldUpdate;