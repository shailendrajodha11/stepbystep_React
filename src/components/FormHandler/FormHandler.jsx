import React, { useState } from "react";
import ReactDOM from 'react-dom/client'

function FormHandler(){
    const [name, setName] = useState(null)
    const [age, setAge] = useState(null)
    const [mail, setMail] = useState(null)
    const [interest, setInterest] = useState(null)
    const [tnc, setTnc] = useState(false)

    function getFormData(val){
        console.log(name, age,  mail, interest, tnc);
        val.preventDefault()
    }
    return (
        <div>
            <h1>Complete the form to procced further :-</h1>
            <form onSubmit={getFormData}>
                Name : <input type='text' placeholder="Enter Your Name" onChange={(e)=>{setName(e.target.value)}}/> <br/> <br/>
                Age : <input  type='number' placeholder='Enter Your Age' onChange={(e)=>{setAge(e.target.value)}}/> <br/> <br/>
                Email : <input type='email' placeholder="Enter your email" onChange={(e)=>{setMail(e.target.value)}}/> <br/> <br/>
                Car : <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>Choose Your Car</option>
                    <option>Audi</option>
                    <option>BMW</option>
                    <option>Mercerdies</option>
                    <option>Lamborgini</option>
                </select> <br/><br/>
                <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept  Terms and Conditions</span><br/> <br/>
                <button type='submit'>Sumit</button>
            </form>
        </div>
    )
}

export default FormHandler;