import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FormValidation() {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

    function login(e){
        e.preventDefault()
        if(user.length<3 || password.length<3){
            alert("Invalid Information. Please check your user name and password.");
        }
        else{
            alert("Logged in Successfully");
        }
    }

  function userHandler(e) {
    let item = e.target.value;
    setUser(e.target.value)
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  }

  function passwordHandler(e) {
    let item = e.target.value;
    setPassword(e.target.value)
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  }
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={userHandler}
        /> {userErr?<span> User Invalid</span>:null} <br/><br/>
        <input
          type="text"
          placeholder="Enter  Password"
          onChange={passwordHandler}
        /> {passErr?<span> Invalid Password</span>:null} <br/><br/>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
}

export default FormValidation;
