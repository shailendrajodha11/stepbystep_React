import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import ClassComp from './components/ClassComp/ClassComp';
import ClickEve from './components/ClickEve/ClickEve';
import Props from './components/Props/Props';
import InputBox from './components/InputBox/InputBox';
import Toggle from './components/Toggle/Toggle';
import FormHandler from './components/FormHandler/FormHandler';
import CondRender from './components/CondRender/CondRender';
import FormValidation from './components/FormValidation/FormValidation';
import FunAsProps from './components/FunAsProps/FunAsProps';
import Constructor from './components/Constructor/Constructor';
import RenderMethod from './components/RenderMethod/RenderMethod';
import CompoDidMount from './components/CompoDidMount/CompoDidMount';
import CompoDidUpdate from './components/CompoDidUpdate/CompoDidUpdate';
import CompShouldUpdate from './components/CompShouldUpdate/CompShouldUpdate';
import CompoWillUnmount from './components/CompoWillUnmount/CompoWillUnmount';
import UseEffect from './components/UseEffect/UseEffect';
import StyleInReact from './components/StyleInReact/StyleInReact';


function App(){

  // function funasprop(){
  //       alert("Hello froma a Function that is passed as Props!");
  // }

  // const [name, setName] = useState('Shailendra')

  // const [show, setShow] = useState(true)
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

      <StyleInReact/>
    </>
  )
}

export default App;