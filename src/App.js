import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoContainer from './PhotoContainer'

import Axios from "axios";





function App() {
  const [date, setDate] = useState([])

  useEffect(()=>{
    Axios
    .get('https://api.nasa.gov/planetary/apod?api_key=ZUTQNJgHM8K7HjVcadIEkVh6UD1UnScImjfb0S1S')
    
    .then(response => {
      console.log(response.data);
      setDate(response.data);
    
    })
    .catch(error => console.log("Error!", error))
  },[])
  
    

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
  app! Have fun {date.copyright}!
      </p>
      <PhotoContainer/>
    </div>
  );
}

export default App;
