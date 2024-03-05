import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(90);

  useEffect(() => {
    console.log("Count Badh Gya");
  }, [count]);

  useEffect(() => {
    console.log("Ye To Data h....");
  }, [data]);

  return (
    <div>
      <h1>UseEffect</h1>
      <h1>Count is: {count}</h1>
      <h1>Data is: {data}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </div>
  );
}

export default UseEffect;
