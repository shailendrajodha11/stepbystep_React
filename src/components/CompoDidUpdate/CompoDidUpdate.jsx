import React from "react";
import ReactDOM from "react-dom/client";

class CompoDidUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      count:0
    };
  }
  componentDidUpdate(preProps, preState,snapshot){
    console.log("ComponentDidUpdate", preState, this.state.count)
    if(preState.count===this.state.count)
    {
      alert("Data is already same")
    }
  }
  render() {
    console.log("Render");

    return (
      <div>
      <h1>ComponentDidUpdate {this.state.count}</h1>
        <button onClick={()=>this.setState({count:1})}>Update State</button>
        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update State</button> */}
      </div>
    );
  }
}

export default CompoDidUpdate;
