import React, { useRef } from "react";

function UncontrolledCompo() {
    let inputRef1 = useRef(null);
    let inputRef2 = useRef(null)

    function submitform(e){
        e.preventDefault();
        console.log("Value of 1st Input Tag is : ", inputRef1.current.value);
        console.log("Value of 2nd Input Tag is : ", inputRef2.current.value);

        let inputTag3 = document.getElementById('input3').value;
        console.log("Value of 3rd Input Tag is : ", inputTag3);
    }

  return (
    <div className="UnControll">
      <form onSubmit={submitform}>
        <h1>Uncontrolled Component</h1>
        <input ref={inputRef1} type="text" /> <br />
        <br />
        <input ref={inputRef2} type="text" /> <br />
        <br />
        <input type="text" id="input3" /> <br/><br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledCompo;