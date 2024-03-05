import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Props(props) {

//   const [data, setData] = useState(null);
//   function getdata(){
//     props.name = "Shailendra Singh Jodha"
//     setData(props.name);
//   }

  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>
        Hi {props.name}! You are {props.age} years old.
      </h1>
      {/* <button onClick={getdata}>Click here</button> */}
    </div>
  );
}

export default Props;
