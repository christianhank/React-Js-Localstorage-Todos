import React, { useState } from "react";
import './welcome.css';

// check if name exists
// get name from input, check if empty
// on press submit, change statee
function Welcome(props) {

  const [input,setInput] = useState("");


  const onChange = (e) => { // nimmt den input
    setInput(e.currentTarget.value);
  }


  const formHandler = (name) => {
    if (name !== ""){
      localStorage.setItem("name",name);
      props.login(true);
    }
   
  }

  return (
    <div className="welcome container">
      <h1 className="text-center ">Willkommen, wie ist dein Name?</h1>
      <h5 className="text-center text-dark infoText">Deine Aufgaben werden bei <strong>Local ToDo</strong> lokal in deinem Browser gespeichert. Keine Anmeldung & keine Registrierung notwendig, dein Name reicht(selbst den bräuchte man nicht, macht das Ganze aber freundlicher)</h5>
      <form onSubmit={e => { e.preventDefault(); }}>
      
        <div  className="mt-4 row rounded inputWelcome">
          <input type="text" className="input rounded border-0 shadow-lg" onChange={onChange} name="name" />
          <input type="button" className="btn btn-warning goButton" onClick={() => formHandler(input)} value="Go" />
        </div>
        
    </form>
    </div>
    )
  
}

export default Welcome;
