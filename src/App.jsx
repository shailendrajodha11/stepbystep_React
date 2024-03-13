import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import ClassComp from "./components/ClassComp/ClassComp";
import ClickEve from "./components/ClickEve/ClickEve";
import Props from "./components/Props/Props";
import InputBox from "./components/InputBox/InputBox";
import Toggle from "./components/Toggle/Toggle";
import FormHandler from "./components/FormHandler/FormHandler";
import CondRender from "./components/CondRender/CondRender";
import FormValidation from "./components/FormValidation/FormValidation";
import FunAsProps from "./components/FunAsProps/FunAsProps";
import Constructor from "./components/Constructor/Constructor";
import RenderMethod from "./components/RenderMethod/RenderMethod";
import CompoDidMount from "./components/CompoDidMount/CompoDidMount";
import CompoDidUpdate from "./components/CompoDidUpdate/CompoDidUpdate";
import CompShouldUpdate from "./components/CompShouldUpdate/CompShouldUpdate";
import CompoWillUnmount from "./components/CompoWillUnmount/CompoWillUnmount";
import UseEffect from "./components/UseEffect/UseEffect";
import StyleInReact from "./components/StyleInReact/StyleInReact";
import Map_fun from "./components/Map_fun/Map_fun";
import ForwardRef from "./components/ForwardRef/ForwardRef";
import ControlledCompo from "./components/ControlledCompo/ControlledCompo";
import UncontrolledCompo from "./components/UncontrolledCompo/UncontrolledCompo";
import HighOrderCompo from "./components/HighOrderCompo/HighOrderCompo";

function App() {
  // function funasprop(){
  //       alert("Hello froma a Function that is passed as Props!");
  // }

  // const [name, setName] = useState('Shailendra')

  // const [show, setShow] = useState(true)


  // let RefVariable = useRef(null)
  // function forwrRefvala(){
  //   RefVariable.current.value = "Shailendra"
  //   RefVariable.current.style.color = "green"
  //   RefVariable.current.style.backgroundColor = "pink"
  //   RefVariable.current.focus()
  //   RefVariable.current.value = " "
  // }
  return (
    <>
      {/* <h1>This is heading</h1> */}
      {/* <ClassComp/> */}

      {/* <ClickEve/> */}

      {/* <Props name={"Shailendra"}  age= '20' /> */}

      {/* <InputBox/> */}

      {/* <Toggle/> */}

      {/* <FormHandler/> */}

      {/* <CondRender/> */}

      {/* <FormValidation/> */}

      {/* <FunAsProps data={funasprop}/> */}

      {/* <Constructor/> */}

      {/* <RenderMethod name={name}/> */}
      {/* <button onClick={(e)=>{setName("JodhaJi")}}>Update Name</button> */}

      {/* <CompoDidMount/> */}

      {/* <CompoDidUpdate/> */}

      {/* <CompShouldUpdate/> */}

      {/* {show ? <CompoWillUnmount/> : <h1>Component Removed</h1>}
      <button onClick={()=>setShow(!show)}>Toggle Child Component</button> */}

      {/* <UseEffect/> */}

      {/* <StyleInReact /> */}

      {/* <Map_fun/> */}


      {/* <ForwardRef ref={RefVariable}/>
      <button onClick={forwrRefvala}>Click Me</button> */}

      {/* <ControlledCompo/> */}

      {/* <UncontrolledCompo/> */}

      <HighOrderCompo/>
    </>
  );
}

export default App;
