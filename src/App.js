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
    

      return (
    <div className="App">
      <Main name={localStorage.getItem("name")} lift={setLoggedIn}/> 
    </div>
  );
    }

  
}

export default App;
