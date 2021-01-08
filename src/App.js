import React, {useState} from 'react';

import './App.css';
import Main from "./main_screen";
import Welcome from "./welcome_screen"

function App() {

  const checkName = () => {
    if (localStorage.getItem("name") == null){
      return false
    } else {
      return true
    }
  }

  const [loggedIn,setLoggedIn] = useState(checkName);
  

  // ab hier beginnt der eigentliche code

  if (loggedIn === false){
    return (
      <div>

      <Welcome login={setLoggedIn}  />
    </div>
      
    ) 
    
  }else {
    
    var randomNumber = Math.floor(Math.random() * 5);
      return (
    <div className="App">
      <Main name={localStorage.getItem("name")} zahl={randomNumber} lift={setLoggedIn}/> 
    </div>
  );
    }

  
}

export default App;
