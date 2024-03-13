import React from "react";
import ReactDOM from "react-dom/client";
import datas from "./data.js";

function Map_fun() {
  return (
    <div>
      <table border={2}>
        <tbody>
        <tr>
            <td>FirstName</td>
            <td>MaidenName</td>
            <td>LastName</td>
            <td>Age</td>
            <td>Gender</td>
            <td>Email</td>
            <td>Phone</td>
        </tr>
          {datas.map((item) => (
            <tr>
                <td>{item.firstName}</td>
                <td>{item.maidenName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Map_fun;
