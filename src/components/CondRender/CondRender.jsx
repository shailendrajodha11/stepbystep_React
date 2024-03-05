import React, { useState } from "react";
import ReactDOM from 'react-dom/client'

function CondRender (){
    const [loggedIn, setLoggedIn] = useState(1)
    return (
        <div>
            {
                loggedIn==1?<h1>Welcome User1</h1> : loggedIn==2?<h1>Welcome User2</h1> : <h1>Welcome User3</h1>
            }
        </div>
    )
}

export default CondRender;